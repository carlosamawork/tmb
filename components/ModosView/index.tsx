import React, { useEffect, useRef, useState } from "react"
import Image from "next/image";
import { useRouter } from 'next/router'
import Link from 'next/link'
import BannerPage from "components/BannerPage";
import MenuPage from "components/MenuPage";
import ModosContent from "components/ModosContent";



export default function ModosView ({node}) {
    const router = useRouter();
    const myParam = router.query.index;
    const [index, setIndex] = useState(myParam ? parseInt(myParam.toString()) : 0);
    return (
        <>
            <BannerPage title={node.title} subtitle={node.field_subtitle} image={node.field_banner_background} text={node.body} />
            <MenuPage elements={node.field_lista_modos_de_transporte} setIndex={setIndex} index={index} />
            <ModosContent data={node.field_lista_modos_de_transporte[index]} />
        </>
    )

}