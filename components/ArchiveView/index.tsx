import React, { useEffect, useRef, useState } from "react"
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
    console.log(nodes);

    const [selectedNodes, setSelectedNodes] = useState(nodes)
    const [initTipologia] = useState({name: 'Tipología del Proyecto', id: 'tipo_0'})
    const [initRol] = useState({name: 'Rol', id: 'rol_0'})
    const [initEtapa] = useState({name: 'Etapa', id: 'etapa_0'})

    const [selectedTipologia, setSelectedTipologia ] = useState(initTipologia)
    const [selectedRol, setSelectedRol ] = useState(initRol)
    const [selectedEtapa, setSelectedEtapa ] = useState(initEtapa)
    const [selectedTag, setSelectedTag ] = useState(null)

    useEffect(() => {
      if(selectedTag !== null){
        setSelectedNodes(selectedNodes.filter(item => item.field_tags.filter(tag => tag.name == selectedTag.name).length > 0))
      } 
    }, [selectedTag])

    useEffect(() => {
      if(selectedRol.id !== 'rol_0'){
        setSelectedNodes(selectedNodes.filter(item => item.field_rol_tmb.name == selectedRol.name))
      } 
    }, [selectedRol])

    useEffect(() => {
      if(selectedEtapa.id !== 'etapa_0'){
        setSelectedNodes(selectedNodes.filter(item => item.field_etapa.name == selectedEtapa.name))
      } 
    }, [selectedEtapa])

    useEffect(() => {
      if(selectedTipologia.id !== 'tipo_0'){
        setSelectedNodes(selectedNodes.filter(item => item.field_tipologia.name == selectedTipologia.name))
      } 
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