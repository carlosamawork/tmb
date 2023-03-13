import React, { useEffect, useRef } from "react"
import Image from "next/image"
import s from './LogosView.module.scss'
import myLoader from "components/Loader"

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
                            <div className={s.logo}>
                                <Image
                                    loader={myLoader}
                                    src={item.uri.url}
                                    width={item.resourceIdObjMeta.width}
                                    height={item.resourceIdObjMeta.height}
                                    alt={item.resourceIdObjMeta.alt}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )

}