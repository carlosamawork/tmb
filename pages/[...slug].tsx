import { GetStaticPathsResult, GetStaticPropsResult } from "next"
import Head from "next/head"
import { DrupalNode } from "next-drupal"

import { drupal } from "lib/drupal"
import { NodeArticle } from "components/node--article"
import  SomosView  from "components/SomosView"
import ComoView from "components/ComoView"
import QueView from "components/QueView"
import ModosView from "components/ModosView"
import DescarbonizacionView from "components/DescarbonizacionView"
import ExperienciaView from "components/ExperienciaView"

const RESOURCE_TYPES = ["node--quienes_somos", "node--article", "node--como_lo_hacemos", "node--que_hacemos"]

interface NodePageProps {
  resource: DrupalNode
}

export default function NodePage({ resource }: NodePageProps) {
  console.log(resource);
  if (!resource) return null

  return (

    <>
      {resource.type === "node--quienes_somos" && <SomosView node={resource} />}
      {resource.type === "node--como_lo_hacemos" && <ComoView node={resource} />}
      {resource.type === "node--que_hacemos" && <QueView node={resource} />}
      {resource.type === "node--pagina_modos_de_transporte" && resource.path.alias === "/que-hacemos/modos-transporte" && <ModosView node={resource} />}
      {resource.type === "node--pagina_modos_de_transporte" && resource.path.alias === "/que-hacemos/descarbonizacion" && <DescarbonizacionView node={resource} />}
      {resource.type === "node--pagina_modos_de_transporte" && resource.path.alias === "/que-hacemos/experiencia-cliente" && <ExperienciaView node={resource} />}
      {resource.type === "node--pagina_modos_de_transporte" && resource.path.alias === "/que-hacemos/soluciones-digitales" && <ExperienciaView node={resource} />}
      {resource.type === "node--article" && <NodeArticle node={resource} />}
    </>
    
  )
}

export async function getServerSidePaths(context): Promise<GetStaticPathsResult> {
  console.log('lalalala')
  return {
    paths: await drupal.getStaticPathsFromContext(RESOURCE_TYPES, context),
    fallback: "blocking",
  }
}

export async function getServerSideProps(
  context
): Promise<GetStaticPropsResult<NodePageProps>> {
  const path = await drupal.translatePathFromContext(context)

  if (!path) {
    return {
      notFound: true,
    }
  }

  const type = path.jsonapi.resourceName

  let params = {}
  if (type === "node--article") {
    params = {
      include: "field_image,uid",
    }
  }

  if (type === "node--quienes_somos") {
    params = {
      include: "field_banner_background, field_image_introduccion, uid",
    }
  }

  if (type === "node--como_lo_hacemos") {
    params = {
      include: "field_banner_background, uid",
    }
  }

  if (type === "node--que_hacemos") {
    params = {
      include: "field_banner_background, field_mapa, field_logos_soluciones_digitales, field_logos_modos_transporte, field_logos_experiencias, field_logos_descarbonizacion, uid",
    }
  }

  if (type === "node--pagina_modos_de_transporte") {
    params = {
      include: "field_banner_background, field_lista_modos_de_transporte, field_lista_modos_de_transporte.field_icono, field_lista_modos_de_transporte.field_project_image, field_lista_modos_de_transporte.field_slider_fotos, field_lista_modos_de_transporte.field_image, uid",
    }
  }

  const resource = await drupal.getResourceFromContext<DrupalNode>(
    path,
    context,
    {
      params,
    }
  )

  // At this point, we know the path exists and it points to a resource.
  // If we receive an error, it means something went wrong on Drupal.
  // We throw an error to tell revalidation to skip this for now.
  // Revalidation can try again on next request.
  if (!resource) {
    throw new Error(`Failed to fetch resource: ${path.jsonapi.individual}`)
  }

  // If we're not in preview mode and the resource is not published,
  // Return page not found.
  if (!context.preview && resource?.status === false) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      resource,
    },
  }
}
