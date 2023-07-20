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
 
import '../styles/main.scss'
import { useRouter } from "next/router"

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


TMBApp.getInitialProps = async(AppContext) => {
  const appProps = await App.getInitialProps(AppContext)

  

  appProps.pageProps = {
    
  }

  return { ...appProps }
}

export default TMBApp;