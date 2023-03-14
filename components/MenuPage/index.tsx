import React, { useEffect, useRef, useState } from "react"
import { useRouter } from 'next/router'
import s from './MenuPage.module.scss';


export default function MenuPage ({elements, setIndex, index}) {
    const modosRef = useRef([]);


    return (
        <>

          <nav className={s.menuPage} >
            <ul className={s.listElements}>
            {elements.map((item, indexMap) => {
            return(
            <>
                <li key={`roles-${indexMap}`}
                ref={e => {
                    modosRef.current[indexMap] = e
                }}
                className={index == indexMap ? s.active : undefined}
                onClick={() => setIndex(indexMap)}
                >
                    {item.title}
                </li>
            </>
            )
            })}
            </ul>
            
          </nav>
        </>
    )

}