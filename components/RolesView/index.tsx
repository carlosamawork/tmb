import React, { useEffect, useRef, useState } from "react"
import Image from "next/image";
import { useRouter } from 'next/router'
import parse from "html-react-parser"
import s from './RolesView.module.scss';
import myLoader from "components/Loader";
import { Body } from "components/Body";


export default function RolesView ({title, elements}) {
    const rolesRef = useRef([]);
    return (
        <>

          <section className={s.rolesViewSection} >
            <div className={s.rolesViewTextContent}>
              <h2>{title}</h2>
              <ul className={s.listElements}>
              {elements.map((item, index) => {
                return(
                <>
                  <li key={`roles-${index}`}
                    ref={e => {
                        rolesRef.current[index] = e
                  }}>
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