import React, { useEffect, useRef } from "react"
import Image from "next/image";
import { useRouter } from 'next/router'
import Link from 'next/link'
import BannerPage from "components/BannerPage";
import SomosText from "components/SomosText";
import FourCircles from "components/FourCircles";
import EjesView from "components/EjesView";


export default function SomosView ({node}) {
    console.log(node)
    return (
        <>
            <BannerPage 
                image={node.field_banner_background} 
                title={node.field_banner_background.resourceIdObjMeta.alt} 
                subtitle={node.field_subtitulo.value}
            />
            <SomosText 
                title={node.field_title_introduccion.value} 
                text={node.field_text_introduccion.value}             
                foto={node.field_image_introduccion}
                background='#efefef' 
            />
            <SomosText 
                title={node.field_title_grupo.value} 
                text={node.field_text_grupo.value}
                foto={undefined}
                background={undefined} 
            />
            <FourCircles 
                title={undefined}
                datos={node.field_circles_grupo}
            />
            <EjesView
                title={node.field_title_ejes.value}
                elements={node.field_ejes}
            />

        </>
    )

}