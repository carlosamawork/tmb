import React, { useEffect, useRef, useState } from "react"
import Image from "next/image";
import { useRouter } from 'next/router'
import Link from 'next/link'
import BannerPage from "components/BannerPage";
import MenuPage from "components/MenuPage";
import ExperienciaContent from "components/ExperienciaContent";



export default function ExperienciaView ({node}) {
    const [index, setIndex] = useState(0);
    console.log(node)
    return (
        <>
            <BannerPage title={node.title} subtitle={node.field_subtitle} image={node.field_banner_background} text={node.body} />
            <MenuPage elements={node.field_lista_modos_de_transporte} setIndex={setIndex} index={index} />
            <ExperienciaContent data={node.field_lista_modos_de_transporte[index]} />
        </>
    )

}