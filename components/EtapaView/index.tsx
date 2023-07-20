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
                return(
                <>
                  <li key={`roles-etapa-${index}`}
                    ref={e => {
                        etapaRef.current[index] = e
                  }}>
                    <div className={s.totalCircle}>
                      <div className={s.circle}>
                        <Image 
                            loader={myLoader}
                            src={item.field_icono.uri.url}
                            width={item.field_icono.resourceIdObjMeta.width}
                            height={item.field_icono.resourceIdObjMeta.height}
                            alt={item.field_icono.resourceIdObjMeta.alt}
                        />
                      </div>

                      <div className={s.circleBig}>
                        <Image 
                            loader={myLoader}
                            src={item.field_image.uri.url}
                            width={item.field_image.resourceIdObjMeta.width}
                            height={item.field_image.resourceIdObjMeta.height}
                            alt={item.field_image.resourceIdObjMeta.alt}
                        />
                      </div>
                    </div>

                    {/* <div className={s.line}></div> */}
                    <div className="textContent">
                      <h3>{item.title}</h3>
                      <Body value={item.body.processed} /> 
                    </div>
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