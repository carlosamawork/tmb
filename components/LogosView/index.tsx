import React, { useEffect, useRef } from "react"
import Image from "next/image"
import s from './LogosView.module.scss'
import myLoader from "components/Loader"
import Link from "next/link"

export default function LogosView ({ title, logos }) {

    return (
        <>
            <div className={s.logosRow}>
                <div className={s.title}>
                    <h3>{title}</h3>
                </div>
                <div className={s.logos}>
                    {logos.map((item, index) => {
                        return (
                            <Link href={item.resourceIdObjMeta.title + `?index=${index}`} className={s.logo}>
                                <Image
                                    loader={myLoader}
                                    src={item.uri.url}
                                    width={item.resourceIdObjMeta.width}
                                    height={item.resourceIdObjMeta.height}
                                    alt={item.resourceIdObjMeta.alt}
                                />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )

}