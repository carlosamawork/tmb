import Head from "next/head"
import { GetStaticPropsResult } from "next"
import { DrupalNode } from "next-drupal"
import { DrupalJsonApiParams } from "drupal-jsonapi-params"
import { drupal } from "lib/drupal"
import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants"
import HomeView from "components/HomeView"

export default function IndexPage({ node }) {
  console.log(node)
  return (
    <>
      {/* <SEO
        title={`OWL`}
        description={`OWL is a Barcelona-based design studio led by Alfredo Lopez, which designs and manufactures unique furniture and objects, mainly but not exclusively in wood.`}
        canonicalUrl={`https://owlfurnitureandobjects.com/`}
        ogTwitterImage={posts.images[0].image}
        ogType={'website'} 
        ogImageUrl={`/media/apple-icon-180x180.png`}
      /> */}
 
      <main>
        <HomeView node={node} ></HomeView>
      </main>
    </>
  )
}

export async function getServerSideProps({context}) {
  console.log(context);
  const params = new DrupalJsonApiParams()
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

  // Fetch the node from Drupal.
  const node = await drupal.getResource(
    "node--pagina_inicio",
    "d103cb62-b4b2-4575-a929-b0dfc4ebc54e",
    {
      params: params.getQueryObject(),
    }
  )

  // Pass the node as props to the HomePage.
  return {
    props: {
      node,
    },
  }
}
