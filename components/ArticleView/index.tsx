import React, { useEffect, useRef, useState } from "react"
import Image from "next/image";
import { useRouter } from 'next/router'
import parse from "html-react-parser"
import s from './ArticleView.module.scss';
import myLoader from "components/Loader";
import { Body } from "components/Body";
import BannerPage from "components/BannerPage";
import ArchiveSection from "components/ArchiveSection";



export default function ArticleView ({node}) {
    const etapaRef = useRef([]);
   

    

   

    return (
        <>
            <BannerPage 
                image={node.field_banner_background} 
                title={node.title} 
                subtitle={undefined}
                text={undefined}
            /> 
            <section className={s.content}>
                <aside className={s.aside}>
                    <div className={s.rolTmb}>
                        <p><small>{node.field_titulo_rol.value}</small></p>
                        <h3>{node.field_rol_tmb.name}</h3>
                    </div>
                    {node.field_etapa ? <div className={s.etapa}>
                        <p><small>{node.field_titulo_etapa.value}</small></p>
                        {node.field_etapa.map((element, index) =>{
                            return(<h3>{element.name}</h3>);
                        })}
                    </div> : undefined}
                </aside>
                <article>
                    <div className={s.tagDiv}>
                        {node.field_tags.map((element, index) =>{
                            return(
                                <>
                                    <Image
                                        loader={myLoader}
                                        src={element.field_icono.uri.url}
                                        width={element.field_icono.resourceIdObjMeta.width}
                                        height={element.field_icono.resourceIdObjMeta.height}
                                        alt={element.field_icono.resourceIdObjMeta.alt}
                                        className={s.imageActive}
                                    />
                                    <p><small>{element.name}</small></p>
                                </>
                            )
                        })}
                    </div>
                    <div className={s.body}>
                        <Body value={node.body.processed} />
                    </div>
                </article>
            </section>
            <section className={s.relatedProjects}>
                <h3>{node.field_title_relacionados.value}</h3>
                <div className={s.relatedElements}>
                <ArchiveSection nodes={node.field_relacionados.field_related_articles} />
                </div>
                
            </section>
        </>
    )

}