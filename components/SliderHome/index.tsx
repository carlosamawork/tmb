import React, { useEffect, useRef } from "react"
import Image from "next/image";
import myLoader from "components/Loader";
import s from './SliderHome.module.scss';

// SWIPER

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function SliderHome ({title, text, fotos}) {
    const slideRef = useRef([])

    return (
        <>
            <div className={s.sliderHome}>
                <div className={s.textSlider}>
                    <h3><div className={s.line}></div>{title}</h3>
                    <div className={s.contentText} dangerouslySetInnerHTML={{ __html: text}}> 
                    </div>
                    <div className={s.buttonSliderHome}>
                        <button><div className={s.plus}>+</div></button>
                    </div>
                    
                </div>
                <div className={s.swiperSlider}>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation
                        >
                        {
                            fotos.map((foto, index) => {
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

            </div>
        </>
    )

}
