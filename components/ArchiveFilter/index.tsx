import React, {  } from "react"
import Image from "next/image";
import myLoader from "components/Loader";
import s from "./ArchiveFilter.module.scss";
import { useState, useEffect } from 'react'
import { Listbox } from '@headlessui/react'
import Selector from "components/Selector";
import Checkboxer from "components/Checkboxer";
import useTranslation from 'next-translate/useTranslation';


export default function ArchiveFilter (
    { 
        tags,
        setSelectedTag,
        selectedTag, 
        tipologia,
        setSelectedTipologia,
        selectedTipologia, 
        initTipologia, 
        rol,
        setSelectedRol,
        selectedRol, 
        initRol, 
        etapa,
        setSelectedEtapa,
        selectedEtapa,
        initEtapa,
        setSelectedNodes,
        nodes  
    }
    
    ) {
    const { t } = useTranslation('common');
    return (
        <div className={s.filterSection}>
            <h3 className={s.title}>{t('filtrar')}</h3>

            <div className={s.form}>
                <div className={s.tags}>
                    <Checkboxer elements={tags} setElementSelected={setSelectedTag} elementSelected={selectedTag} />
                </div>
                <div className={s.tipologia}>
                    <Selector elements={tipologia} setSelectedElement={setSelectedTipologia} selectedElement={selectedTipologia} initial={initTipologia}/>
                </div>
                <div className={s.rol}>
                    <Selector elements={rol} setSelectedElement={setSelectedRol} selectedElement={selectedRol} initial={initRol}/>
                </div>
                <div className={s.tipologia}>
                    <Selector elements={etapa} setSelectedElement={setSelectedEtapa} selectedElement={selectedEtapa} initial={initEtapa} />
                </div>
                <div className={s.resetContent}>
                  <button className={s.reset} onClick={() =>{
                    setSelectedNodes(nodes)
                    setSelectedEtapa(initEtapa)
                    setSelectedTag(null)
                    setSelectedRol(initRol)
                    setSelectedTipologia(initTipologia)
                  }}>Reset</button>
                </div>

            </div>
            
        </div>
    )

}