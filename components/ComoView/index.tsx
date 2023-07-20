import React, { useEffect, useRef } from "react"
import Image from "next/image";
import { useRouter } from 'next/router'
import Link from 'next/link'
import BannerPage from "components/BannerPage";
import RolesView from "components/RolesView";
import EtapaView from "components/EtapaView";
import s from './ComoView.module.scss';



export default function ComoView ({node}) {
    return (
        <>
           <BannerPage 
            image={node.field_banner_background} 
            title={node.field_general_title.value} 
            subtitle={node.field_subtitle}
            text={undefined}
           /> 
           <section className={s.textFlex}>
                <div className="contentLeft">
                    <h3>{node.field_text_description_big.value}</h3>
                </div>
                <div className="contentRight" dangerouslySetInnerHTML={{ __html: node.field_text_description_small.value}}></div>
            </section>
            <div className={s.gridTwoColumns}>
                <RolesView title={node.field_title_roles.value} elements={node.field_roles} />
            </div>
            <div className={s.etapas}>
                <EtapaView title={node.field_title_etapas.value} elements={node.field_etapa_content} />
            </div>

        </>
    )

}