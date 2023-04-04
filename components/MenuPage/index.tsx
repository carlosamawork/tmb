import React, { useEffect, useRef, useState } from "react"
import { useRouter } from 'next/router';
import cn from 'clsx';
import s from './MenuPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight} from '@fortawesome/free-solid-svg-icons'


export default function MenuPage ({elements, setIndex, index}) {
    const modosRef = useRef([]);
    const [open, setOpen] = useState(false);
    

    return (
        <>
            <div className={s.selectedMobile} onClick={() => setOpen(true)}>
                {elements[index].title} <FontAwesomeIcon icon={faChevronRight}/>
            </div>
            <nav className={open ? cn(s.menuPage, s.active) : s.menuPage } >
                <ul className={s.listElements}>
                {elements.map((item, indexMap) => {
                    return(
                        <>
                            <li key={`roles-${indexMap}`}
                            ref={e => {
                                modosRef.current[indexMap] = e
                            }}
                            className={index == indexMap ? s.active : undefined}
                            onClick={() => {setIndex(indexMap); setOpen(false);}}
                            >
                                {item.title}
                            </li>
                        </>
                    )
                })}
                </ul>
            </nav>
        </>
    )

}