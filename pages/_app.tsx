import { AppProps } from "next/app"
import { GetStaticPropsResult } from "next"
import { DrupalNode } from "next-drupal"
import { MainProvider }from "../contexts/Main.context"
import Script from 'next/script'
import Head from "next/head"

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
  
  
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: '<script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="3308fd31-9528-4533-8868-f49c0ed16ac0" data-blockingmode="auto" type="text/javascript"></script>' }} />
      <MainProvider>
        
        <RealViewHeight />
        <Layout>

          <Component 
            {...pageProps}
          />
        </Layout>
        
      </MainProvider>
    </>
  )
} 


TMBApp.getInitialProps = async(appContext) => {
  const appProps = await App.getInitialProps(appContext)

  const items = await drupal.getMenu("top-menu")

  const mainMenu = await drupal.getMenu("menu-principal")

  const footerMenu = await drupal.getMenu("footer")

  const socialMenu = await drupal.getMenu("social-menu")

  const datosMenu = await drupal.getMenu("menu-datos")

  const copyright = await drupal.getResource(
    "block_content--basic",
    "2d98f35c-36e1-425a-b8c9-e90fbfa796b6"
  )

  appProps.pageProps = {
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