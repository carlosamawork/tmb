import Head from "next/head"
import { GetStaticPropsResult } from "next"
import { DrupalNode } from "next-drupal"
import { DrupalJsonApiParams } from "drupal-jsonapi-params"
import { drupal } from "lib/drupal"
import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants"
import HomeView from "components/HomeView"
import SEO from "components/SEO"
import { useRouter } from "next/router"

export default function IndexPage({ node }) {
  console.log(node)
  return (
    <>
      <SEO
        title={`TMB Internacional`}
        description={`Transports Metropolitans de Barcelona (TMB) es el principal operador de transporte público en el área metropolitana de Barcelona, y un referente de empresa de transporte y movilidad ciudadana en España, Europa y todo el mundo.`}
        canonicalUrl={`https://internacional.tmb.cat`}
        ogTwitterImage={null}
        ogType={'website'} 
        ogImageUrl={`/media/apple-icon-180x180.png`}
      />
 
      <main>
        <HomeView node={node} ></HomeView>
      </main>
    </>
  )
}

export async function getServerSideProps(context) {

  const params = new DrupalJsonApiParams()
  .addFilter("langcode", context.locale)
  .addFields("node--page", [
    "title", 
    "path", 
    "uid",
    "field_subtitle", 
    "field_edit",
    "field_title_datos",
    "field_text_datos",
    "field_text_internacional", 
    "field_title_servicios",
    "field_text_servicios",
    "field_title_soluciones",
    "field_text_soluciones",
    "field_title_transformacion",
    "field_text_transformacion",
    "field_banner_background",
    "field_logo",
    "field_slider_fotos"
  ])
  .addInclude([
    "field_banner_background",
    "field_logo",
    "field_slider_fotos"
  ])

  const items = await drupal.getMenu("top-menu", 
  {locale: context.locale})

  const mainMenu = await drupal.getMenu("menu-principal", 
  {locale: context.locale})

  const footerMenu = await drupal.getMenu("footer", 
  {locale: context.locale})

  const socialMenu = await drupal.getMenu("social-menu", 
  {locale: context.locale})

  const datosMenu = await drupal.getMenu("menu-datos", 
  {locale: context.locale})

  const copyright = await drupal.getResource(
    "block_content--basic",
    "2d98f35c-36e1-425a-b8c9-e90fbfa796b6", 
    {locale: context.locale}
  )

  // Fetch the node from Drupal.
  if(context.locale == 'en'){
    const node = await drupal.getResource(
      "node--pagina_inicio",
      "03162790-9725-4c52-bfb4-0b805d37a35f",
      {
        params: params.getQueryObject(),
      }
    )
    return {
      props: {
        node,
        items,
        mainMenu,
        footerMenu,
        socialMenu,
        datosMenu,
        copyright
      },
    }
  } else if(context.locale == 'ca'){
    const node = await drupal.getResource(
      "node--pagina_inicio",
      "fe13e8da-9b0b-4bdf-960e-64bb8ddef67a",
      {
        params: params.getQueryObject(),
      }
    )
    return {
      props: {
        node,
        items,
        mainMenu,
        footerMenu,
        socialMenu,
        datosMenu,
        copyright
      },
    }
  } else if(context.locale == 'fr'){
    const node = await drupal.getResource(
      "node--pagina_inicio",
      "e5e0503e-bd19-44b4-b369-0fff8be63099",
      {
        params: params.getQueryObject(),
      }
    )
    return {
      props: {
        node,
        items,
        mainMenu,
        footerMenu,
        socialMenu,
        datosMenu,
        copyright
      },
    }
  } else {
    const node = await drupal.getResource(
      "node--pagina_inicio",
      "d103cb62-b4b2-4575-a929-b0dfc4ebc54e",
      {
        params: params.getQueryObject(),
      }
    )
    return {
      props: {
        node,
        items,
        mainMenu,
        footerMenu,
        socialMenu,
        datosMenu,
        copyright
      },
    }
  }
  

  // Pass the node as props to the HomePage.
  
}
