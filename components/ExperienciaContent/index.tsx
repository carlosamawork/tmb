import React, { useEffect, useRef, useState } from "react"
import Image from "next/image";
import { useRouter } from 'next/router'
import Link from 'next/link'
import myLoader from "components/Loader";
import BannerPage from "components/BannerPage";
import MenuPage from "components/MenuPage";
import s from './ExperienciaContent.module.scss';
import { Body } from "components/Body";




export default function ExperienciaContent ({data}) {
    return (
        <>
            <section className={s.contentModos}>
                <div className={s.icon}>
                    <Image 
                        loader={myLoader}
                        src={data.field_icono.uri.url}
                        width={data.field_icono.resourceIdObjMeta.width}
                        height={data.field_icono.resourceIdObjMeta.height}
                        alt={data.field_icono.resourceIdObjMeta.alt}
                    />
                </div>
                <div className={s.contentModosText}>
                    <h2>{data.title}</h2>
                    <div className={s.bodyContent} dangerouslySetInnerHTML={{__html: data.body.value}}>
                    </div>
                    <div className={s.elementsDescar}>
                        {data.field_elementos_digitalizacion.map((item, index) => {
                            return (
                                <>
                                <div className={s.element}>
                                    <Body value={item.processed} /> 
                                </div>
                                </>
                            )
                        })}
                    </div>
                </div>
                
            </section>
            
        </>
    )

}