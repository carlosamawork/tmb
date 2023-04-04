import React, { useEffect, useRef } from "react"
import Image from "next/image";
import { useRouter } from 'next/router'
import Link from 'next/link'
import BannerHome from "components/BannerHome";
import FourCircles from "components/FourCircles";
import SliderHome from "components/SliderHome";
import s from './HomeView.module.scss';


export default function HomeView ({node}) {
  console.log(node)
    return (
        <>
          <BannerHome 
            image={node.field_banner_background} 
            text={node.field_edit} 
            logos={node.field_logo} 
            title={node.title} 
          />
          <section className={s.internationalText}>
            <h2>{node.title}</h2>
            <div className={s.descriptionInternational} dangerouslySetInnerHTML={{ __html: node.field_text_internacional.value}}>
            </div>
            <div className={s.gridElements}>
              <div className={s.element}>
                <div className={s.line}></div>
                <h3>{node.field_title_servicios.value}</h3>
                <div className={s.serviciosText} dangerouslySetInnerHTML={{ __html: node.field_text_servicios.value}}>
                </div>
              </div>
              <div className={s.element}>
                <div className={s.line}></div>
                <h3>{node.field_title_transformacion.value}</h3>
                <div className={s.serviciosText} dangerouslySetInnerHTML={{ __html: node.field_text_transformacion.value}}>
                </div>
              </div>

            </div>
          </section>
          <FourCircles 
            title={node.field_title_datos.value} 
            datos={node.field_text_datos}
          />
          <SliderHome 
            title={node.field_title_soluciones.value} 
            text={node.field_text_soluciones.value} 
            fotos={node.field_slider_fotos} 
          /> 
        </>
    )

}

