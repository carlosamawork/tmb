import { GetStaticPathsResult, GetStaticPropsResult } from "next"
import Head from "next/head"
import { DrupalNode, DrupalTaxonomyTerm } from "next-drupal"

import { drupal } from "lib/drupal"
import normalize from 'json-api-normalizer';
import  SomosView  from "components/SomosView"
import ComoView from "components/ComoView"
import QueView from "components/QueView"
import ModosView from "components/ModosView"
import DescarbonizacionView from "components/DescarbonizacionView"
import ExperienciaView from "components/ExperienciaView"
import { pathToFileURL } from "url"
import ArchiveView from "components/ArchiveView"
import ArticleView from "components/ArticleView"

const RESOURCE_TYPES = ["node--quienes_somos", "node--article", "node--como_lo_hacemos", "node--que_hacemos"]

interface NodePageProps {
  resource: DrupalNode,
  nodes: DrupalNode,
  tags: DrupalTaxonomyTerm,
  rol: DrupalTaxonomyTerm,
  etapas: DrupalTaxonomyTerm,
  tipologia: DrupalTaxonomyTerm
}

export default function NodePage({ resource, nodes, tags, rol, etapas, tipologia }: NodePageProps) {
  console.log(resource)
  console.log(tags)
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
      {resource.type === "node--articles_archive" && <ArchiveView page={resource} nodes={nodes} tags={tags} rol={rol} etapa={etapas} tipologia={tipologia} />}
      {resource.type === "node--article" && <ArticleView node={resource} />}
    </>
    
  )
}

export async function getServerSidePaths(context): Promise<GetStaticPathsResult> {
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
  let nodes =  null
  let tags = null
  let etapas =  null
  let rol = null
  let tipologia = null

  if (type === "node--articles_archive") {
    params = {
      include: "field_banner_background,uid",
    }
    nodes = await drupal.getResourceCollection<DrupalNode[]>("node--article", {
      params: {
        "fields[node--article]": "title,field_pais,path,field_image,field_tags,field_etapa,field_tipologia,field_rol_tmb",
        include: "field_tags.field_icono,field_tags,field_etapa,field_tipologia,field_rol_tmb,field_image,uid",
        
      }
    })

    tags = await drupal.getResourceCollection<DrupalTaxonomyTerm[]>("taxonomy_term--tags", {
      params: {
        "fields[taxonomy_term--etapa]": "name,field_icono,field_icono_inactivo",
        include: "field_icono, field_icono_inactivo",
        
      }
    })

    etapas = await drupal.getResourceCollection<DrupalTaxonomyTerm[]>("taxonomy_term--etapa", {
      params: {
        "fields[taxonomy_term--etapa]": "name",  
      }
    })

    tipologia = await drupal.getResourceCollection<DrupalTaxonomyTerm[]>("taxonomy_term--tipologia_del_proyecto", {
      params: {
        "fields[taxonomy_term--tipologia_del_proyecto]": "name",  
      }
    })

    rol = await drupal.getResourceCollection<DrupalTaxonomyTerm[]>("taxonomy_term--rol", {
      params: {
        "fields[taxonomy_term--rol]": "name",
      }
    })
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

  if (type === "node--article") {
    params = {
      "fields[node--article]": "title,body,path,field_titulo_rol,field_titulo_etapa,field_banner_background,field_relacionados,field_image,field_tags,field_etapa,field_tipologia,field_rol_tmb,field_pais,field_title_relacionados",
      "fields[node--related_articles]": "title,field_related_articles",
      include: "field_tags,field_tags.field_icono,field_banner_background,field_etapa,field_rol_tmb,field_relacionados,field_relacionados.field_related_articles.field_tags,uid,field_relacionados.field_related_articles.field_image,field_relacionados.field_related_articles.field_tags,field_relacionados.field_related_articles.field_etapa,field_relacionados.field_related_articles.field_tipologia,field_relacionados.field_related_articles.field_rol_tmb,field_relacionados.field_related_articles.field_tags.field_icono,field_relacionados.field_related_articles",
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
      nodes,
      tags,
      rol,
      tipologia,
      etapas
    },
  }
}
