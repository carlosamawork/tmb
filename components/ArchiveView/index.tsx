import React, { useEffect, useRef, useState } from "react"
import useTranslation from 'next-translate/useTranslation';
import Image from "next/image";
import { useRouter } from 'next/router'
import parse from "html-react-parser"
import s from './ArchiveView.module.scss';
import myLoader from "components/Loader";
import { Body } from "components/Body";
import BannerPage from "components/BannerPage";
import ArchiveSection from "components/ArchiveSection";
import ArchiveFilter from "components/ArchiveFilter";


export default function ArchiveView ({page, nodes, tags, tipologia, rol, etapa}) {
    const etapaRef = useRef([]);
    const { t } = useTranslation('common');
    console.log(page);
    console.log(nodes)

    const [selectedNodes, setSelectedNodes] = useState(nodes)
    const [initTipologia, setInitTipologia] = useState({name: t('tipologia'), id: 'tipo_0'})
    const [initRol, setInitRol] = useState({name: t('rol'), id: 'rol_0'})
    const [initEtapa, setInitEtapa] = useState({name: t('etapa'), id: 'etapa_0'})

    const [selectedTipologia, setSelectedTipologia ] = useState(initTipologia)
    const [selectedRol, setSelectedRol ] = useState(initRol)
    const [selectedEtapa, setSelectedEtapa ] = useState(initEtapa)
    const [selectedTag, setSelectedTag ] = useState(null)

    useEffect(() => {
      if(selectedTag !== null){
        setSelectedNodes(nodes.filter(item => item.field_tags.filter(tag => tag.name == selectedTag.name).length > 0))
        setSelectedTipologia(initTipologia);
        setSelectedRol(initRol);
        setSelectedEtapa(initEtapa);
      } 
    }, [selectedTag])

    useEffect(() => {
      if(selectedRol.id !== 'rol_0'){
        setSelectedNodes(nodes.filter(item => item.field_rol_tmb ? item.field_rol_tmb.name == selectedRol.name : undefined))
        setSelectedTipologia(initTipologia);
        setSelectedTag(null);
        setSelectedEtapa(initEtapa);
      } 
    }, [selectedRol])

    useEffect(() => {
      console.log(nodes[0]);
      if(selectedEtapa.id !== 'etapa_0'){
        setSelectedNodes(nodes.filter((item) => 
         item.field_etapa ? item.field_etapa.some((etapa) => etapa.name === selectedEtapa.name) : false
        ));        
      } 
      setSelectedTipologia(initTipologia);
      setSelectedTag(null);
      setSelectedRol(initRol);
    }, [selectedEtapa])

    useEffect(() => {
      if(selectedTipologia.id !== 'tipo_0'){
        setSelectedNodes(nodes.filter((item) => item.field_tipologia ? item.field_tipologia.name == selectedTipologia.name : undefined))
      } 
      setSelectedEtapa(initEtapa);
      setSelectedTag(null);
      setSelectedRol(initRol);
    }, [selectedTipologia])
    

    return (
        <>
          <BannerPage 
            image={page.field_banner_background} 
            title={page.title} 
            subtitle={'TMB International'}
            text={undefined}
           /> 
           <section className={s.filters}>
                <ArchiveFilter 
                  tags={tags} 
                  setSelectedTag={setSelectedTag}
                  selectedTag={selectedTag}
                  tipologia={tipologia} 
                  setSelectedTipologia={setSelectedTipologia}
                  selectedTipologia={selectedTipologia}
                  initTipologia={initTipologia}
                  rol={rol} 
                  setSelectedRol={setSelectedRol}
                  selectedRol={selectedRol}
                  initRol={initRol}
                  etapa={etapa} 
                  setSelectedEtapa={setSelectedEtapa}
                  selectedEtapa={selectedEtapa}
                  initEtapa={initEtapa}
                  setSelectedNodes={setSelectedNodes}
                  nodes={nodes}
                />                
           </section>
           <section className={s.archive}>
                <ArchiveSection nodes={selectedNodes} />
           </section>
        </>
    )

}