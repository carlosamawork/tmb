import React, { useEffect, useRef, useState } from "react"
import Image from "next/image";
import { useRouter } from 'next/router'
import Link from 'next/link'
import s from './SomosText.module.scss';
import myLoader from "components/Loader";



export default function SomosText ({title, text, background, foto}) {

    const [styleBackground, setStyleBackground] = useState(null);

    useEffect(() => {
      if(background !== undefined){
        if(window.innerWidth > 990){
          setStyleBackground({
            backgroundColor: background,
            paddingBottom: '134px',
          })
        } else{
          setStyleBackground({
            backgroundColor: background,
            paddingBottom: '57px',
          })
        }
        
      } 
    }, [])
    
    
    

    return (
        <>

          <section className={s.somosTextSection} style={styleBackground}>
            <div className={s.somosTextContent}>
              <div className={s.line}></div>
              <h2>{title}</h2>
              <div className={s.contentText} dangerouslySetInnerHTML={{ __html: text}}>
              </div>
              {foto !== undefined ? 
                <div className={s.imageCircle}>
                  <Image 
                    loader={myLoader}
                    src={foto.uri.url}
                    width={foto.resourceIdObjMeta.width}
                    height={foto.resourceIdObjMeta.height}
                    alt={foto.resourceIdObjMeta.alt}
                  />
                </div> : null}
            </div>
          </section>
        </>
    )

}