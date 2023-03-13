import React, { useEffect, useRef, useState } from "react"
import Image from "next/image";
import { useRouter } from 'next/router'
import parse from "html-react-parser"
import s from './EtapaView.module.scss';
import myLoader from "components/Loader";
import { Body } from "components/Body";


export default function EtapasView ({title, elements}) {
    const etapaRef = useRef([]);

    return (
        <>
          <section className={s.etapasViewSection} >
            <div className={s.etapasViewTextContent}>
              <h2>{title}</h2>
              <ul className={s.listElements}>
              {elements.map((item, index) => {
                console.log(item.processed)
                return(
                <>
                  <li key={`roles-${index}`}
                    ref={e => {
                        etapaRef.current[index] = e
                  }}>
                    <div className={s.line}></div>
                    <Body value={item.processed} /> 
                  </li>
                </>
                )
              })}
              </ul>
            </div>
          </section>
        </>
    )

}