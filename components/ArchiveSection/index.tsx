import React, { useEffect, useRef, useState } from "react"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'
import parse from "html-react-parser"
import s from './ArchiveSection.module.scss';
import myLoader from "components/Loader";
import { Body } from "components/Body";
import BannerPage from "components/BannerPage";


export default function ArchiveSection ({nodes}) {
    const articleRef = useRef([]);


    return (
        <>
         {nodes.map((item, index) => {


            return (
            <>
            <Link
                href={item.path ? item.path.alias : '#'}
            >
            
            <div className={s.article}>
                <div className={s.articleImage}>
                    {item.field_image ?
                    <Image
                        loader={myLoader}
                        src={item.field_image.uri.url}
                        width={item.field_image.resourceIdObjMeta.width}
                        height={item.field_image.resourceIdObjMeta.height}
                        alt={item.field_image.resourceIdObjMeta.alt}
                    /> : undefined}
                    
                </div>
                <div className={s.tag}>
                    {item.field_tags ? item.field_tags.map((elem, index) => {
                        return(
                            <>

                                <Image
                                    loader={myLoader}
                                    src={elem.field_icono.uri.url}
                                    width={elem.field_icono.resourceIdObjMeta.width}
                                    height={elem.field_icono.resourceIdObjMeta.height}
                                    alt={elem.field_icono.resourceIdObjMeta.alt}
                                />
                                <p><small>{elem.name}</small></p>
                            </>
                        )
                    }): undefined}
                </div>
                <h3>{item.title}</h3>
                <p>{item.field_pais?.value}</p>

            </div>
            </Link>
            </>
            )
         })}
        </>
    )

}