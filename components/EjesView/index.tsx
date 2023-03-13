import React, { useEffect, useRef, useState } from "react"
import Image from "next/image";
import { useRouter } from 'next/router'
import Link from 'next/link'
import s from './EjesView.module.scss';
import myLoader from "components/Loader";
import { link } from "fs";



export default function EjesView ({title, elements}) {

    const ejesRef = useRef([]);

    return (
        <>
          <section className={s.ejesSection}>

            <h2>{title}</h2>
            <ul className={s.gridSection}>
                {elements.map((item, index) => {
                  return (
                    <li key={`eje-${index}`}
                    ref={e => {
                        ejesRef.current[index] = e
                    }}>
                      <div className={s.gridContent} dangerouslySetInnerHTML={{ __html: item.value}}>

                      </div>
                    </li>
                  )
                })}
            </ul>
            
          </section>
        </>
    )

}