import React, { useEffect, useRef } from "react"
import s from './FourCircles.module.scss';


export default function FourCircles ({title, datos}) {
    const circlesRef = useRef([])
    return (
        <>
            <div className={s.fourCicles}>
                <h3>{title}</h3>

                <ul className={s.listCircles}>
                    {datos.map((item, index) => {
                        return (
                            <>
                                <li key={`circles-${index}`}
                                ref={e => {
                                    circlesRef.current[index] = e
                                }}>

                                    <div className={s.circleText} dangerouslySetInnerHTML={{ __html: item.value}}>
                                        
                                    </div>

                                </li>
                            </>
                        )
                    })}
                </ul>

            </div>
        </>
    )

}
