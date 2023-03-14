import React, { useEffect, useRef } from "react"
import Image from "next/image";
import { useRouter } from 'next/router'
import Link from 'next/link'
import BannerPage from "components/BannerPage";
import s from './QueView.module.scss';
import myLoader from "components/Loader";
import LogosView from "components/LogosView";



export default function QueView ({node}) {
    console.log(node)
    return (
        <>
           <BannerPage 
            image={node.field_banner_background} 
            title={node.title} 
            subtitle={node.field_subtitle}
            text={undefined}
           /> 
           <section className={s.contentQue}>
                <div className={s.bodyText} dangerouslySetInnerHTML={{__html: node.body.value }}></div>
                <div className={s.mapa}>
                <Image
                    loader={myLoader}
                    src={node.field_mapa.uri.url}
                    width={node.field_mapa.resourceIdObjMeta.width}
                    height={node.field_mapa.resourceIdObjMeta.height}
                    alt={node.field_mapa.resourceIdObjMeta.alt}
                />
                </div>
                <div className={s.bodyText} dangerouslySetInnerHTML={{__html: node.field_segundo_texto.value }}></div>
           </section>
           <section className={s.logosSection}>
                <LogosView title={node.field_title_modos}  logos={node.field_logos_modos_transporte} />
                <LogosView title={node.field_title_descarbonizacion}  logos={node.field_logos_descarbonizacion} />
                <LogosView title={node.field_title_soluciones_digitales}  logos={node.field_logos_soluciones_digitales} />
                <LogosView title={node.field_experiencias_de_cliente}  logos={node.field_logos_experiencias} />
           </section>
        </>
    )

}