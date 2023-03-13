import { AppProps } from "next/app"
import { GetStaticPropsResult } from "next"
import { DrupalNode } from "next-drupal"
import { MainProvider }from "../contexts/Main.context"

import { drupal } from "lib/drupal"

import "styles/globals.css"
import App from 'next/app'

import Layout  from 'components/layout'
import RealViewHeight from '../components/RealViewHeight'
import useFoucFix from '../hooks/use-fouc-fix'
 
import '../styles/main.scss'

function TMBApp ({
  Component,
  pageProps
}) {
  useFoucFix()
  
  return (
    <MainProvider>
      <RealViewHeight />
      <Layout>
        <Component 
          {...pageProps}
        />
      </Layout>
    </MainProvider>
  )
} 


TMBApp.getInitialProps = async(appContext) => {
  const appProps = await App.getInitialProps(appContext)

  const {menu, items} = await drupal.getMenu("top-menu")

  const mainMenu = await drupal.getMenu("menu-principal")

  const footerMenu = await drupal.getMenu("footer")

  const socialMenu = await drupal.getMenu("social-menu")

  const datosMenu = await drupal.getMenu("menu-datos")

  const copyright = await drupal.getResource(
    "block_content--basic",
    "2d98f35c-36e1-425a-b8c9-e90fbfa796b6"
  )

  appProps.pageProps = {
    menu,
    items,
    mainMenu,
    footerMenu,
    socialMenu,
    datosMenu,
    copyright
  }

  return { ...appProps }
}

export default TMBApp;