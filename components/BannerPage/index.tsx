import React, {  } from "react"
import Image from "next/image";
import myLoader from "components/Loader";
import s from "./BannerPage.module.scss"


export default function BannerPage ({ image, title, subtitle, text}) {

    return (
        <div className={s.bannerPage}>
            <div className={s.veilOpacity}></div>
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
                    {text ? <div className={s.textBanner} dangerouslySetInnerHTML={{ __html: text.value}}>
                    </div> : undefined}
                    
                </div>
            </div>
            
        </div>
    )

}