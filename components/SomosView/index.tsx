import React, { useEffect, useRef } from "react"
import Image from "next/image";
import { useRouter } from 'next/router'
import Link from 'next/link'
import BannerPage from "components/BannerPage";
import SomosText from "components/SomosText";
import FourCircles from "components/FourCircles";
import EjesView from "components/EjesView";


export default function SomosView ({node}) {
    return (
        <>
            <BannerPage 
                image={node.field_banner_background} 
                title={node.field_banner_background.resourceIdObjMeta.alt} 
                subtitle={node.field_subtitulo ? node.field_subtitulo.value : undefined}
                text={undefined}
            />
            <SomosText 
                title={node.field_title_introduccion ? node.field_title_introduccion.value : undefined} 
                text={node.field_text_introduccion ? node.field_text_introduccion.value : undefined}             
                foto={node.field_image_introduccion}
                background='#efefef' 
            />
            <SomosText 
                title={node.field_title_grupo ? node.field_title_grupo.value : undefined} 
                text={node.field_text_grupo ? node.field_text_grupo.value : undefined}
                foto={undefined}
                background={undefined} 
            />
            <FourCircles 
                title={undefined}
                datos={node.field_circles_grupo}
            />
            <EjesView
                title={node.field_title_ejes ? node.field_title_ejes.value : undefined}
                elements={node.field_ejes}
            />

        </>
    )

}