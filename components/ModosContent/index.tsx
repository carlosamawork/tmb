import React, { useEffect, useRef, useState } from "react"
import Image from "next/image";
import { useRouter } from 'next/router'
import Link from 'next/link'
import myLoader from "components/Loader";
import BannerPage from "components/BannerPage";
import MenuPage from "components/MenuPage";
import s from './ModosContent.module.scss';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default function ModosContent ({data}) {
    return (
        <>
            <section className={s.contentModos}>
                <div className={s.icon}>
                    <Image 
                        loader={myLoader}
                        src={data.field_icono.uri.url}
                        width={data.field_icono.resourceIdObjMeta.width}
                        height={data.field_icono.resourceIdObjMeta.height}
                        alt={data.field_icono.resourceIdObjMeta.alt}
                    />
                </div>
                <div className={s.contentModosText}>
                    <h2>{data.title}</h2>
                    <div className={s.firstContent}>
                        <p>{data.field_subtitulo.value}</p>
                    </div>
                    <div className={s.swiperSlider}>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={0}
                            slidesPerView={'auto'}
                            navigation
                            freeMode={true}
                            >
                            {
                                data.field_slider_fotos.map((foto, index) => {
                                    return (
                                        <SwiperSlide key={foto} virtualIndex={index}>
                                            <figure>
                                                <Image
                                                    loader={myLoader}
                                                    src={foto.uri.url}
                                                    width={foto.resourceIdObjMeta.width}
                                                    height={foto.resourceIdObjMeta.height}
                                                    alt={foto.resourceIdObjMeta.alt}
                                                />
                                            </figure>
                                            <div className={s.titleImage}>
                                                {foto.resourceIdObjMeta.title}
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                    <div className={s.bodyContent} dangerouslySetInnerHTML={{__html: data.body.value}}>

                    </div>
                </div>
            </section>
            {data.field_title_project && <section className={s.projectModos}>
                <div className={s.maxWidthProject}>
                    <div className={s.firstCol}>
                        <h3>{data.field_title_project}</h3>
                        <div className={s.subtitleFirst} dangerouslySetInnerHTML={{__html: data.field_text_project_consorcio.value}}></div>
                        <div className={s.imageFirst}>
                            <Image 
                                loader={myLoader}
                                src={data.field_project_image.uri.url}
                                width={data.field_project_image.resourceIdObjMeta.width}
                                height={data.field_project_image.resourceIdObjMeta.height}
                                alt={data.field_project_image.resourceIdObjMeta.alt}
                            />
                        </div>
                        <div className={s.line}></div>
                    </div>
                    <div className={s.secondCol} dangerouslySetInnerHTML={{__html: data.field_texto_project_body.value}}></div>
                </div>
            </section>}
            
        </>
    )

}