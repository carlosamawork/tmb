import React, { useEffect, useRef } from "react"
import Image from "next/image";
import { useRouter } from 'next/router'
import Link from 'next/link'
import { absoluteUrl, formatDate } from "lib/utils"
import myLoader from "components/Loader";
import s from "./BannerHome.module.scss"


export default function BannerHome ({ image, logos, title, subtitle, text }) {
    
    const logosRef = useRef([])
    return (
        <div className={s.bannerHome}>
            <figure className={s.bannerImage}>
                <Image
                    loader={myLoader}
                    src={image.uri.url}
                    width={image.resourceIdObjMeta.width}
                    height={image.resourceIdObjMeta.height}
                    alt={image.resourceIdObjMeta.alt}
                />
            </figure>

            <div className={s.content}>
                <div className={s.contentText}>
                    <p>{subtitle}</p>
                    <h1>{title}</h1>
                    <div className={s.textBanner} dangerouslySetInnerHTML={{ __html: text.value}}>
                    </div>
                    <button><div className={s.plus}>+</div></button>
                </div>
                <ul className={s.logos}>
                    {logos.map((elem, index) => {
                        return(
                            <li key={`logo-${index}`}
                                ref={e => {
                                    logosRef.current[index] = e
                                }}>
                                <figure className={s.logoImage}>
                                    <Image
                                    loader={myLoader}
                                    src={elem.uri.url}
                                    width={98}
                                    height={98}
                                    alt={elem.resourceIdObjMeta.alt}
                                    />
                                </figure>
                                <div className={s.description}>
                                    {elem.resourceIdObjMeta.alt}
                                </div>
                            </li>
                        )
                    })}
                    
                </ul>
            </div>
            <div className={s.bannerLine}>
                <div className={s.line}>
                </div>
                <button><div className={s.plus}>+</div></button>
            </div>

        </div>
    )

}