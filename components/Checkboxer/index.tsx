import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import Image from 'next/image'
import myLoader from 'components/Loader'
import s from "./Checkboxer.module.scss"

export default function Checkboxer({elements, setElementSelected, elementSelected}) {

  return (
    <RadioGroup value={elementSelected} onChange={setElementSelected} className={s.radioFlex}>

        {elements.map((element) => ( 
            <RadioGroup.Option value={element}>
                {({ checked }) => (
                    <div className={checked ? s.active : s.inactive}>
                        <Image
                            loader={myLoader}
                            src={element.field_icono.uri.url}
                            width={element.field_icono.resourceIdObjMeta.width}
                            height={element.field_icono.resourceIdObjMeta.height}
                            alt={element.field_icono.resourceIdObjMeta.alt}
                            className={s.imageActive}
                        />
                        <Image
                            loader={myLoader}
                            src={element.field_icono_inactivo.uri.url}
                            width={element.field_icono_inactivo.resourceIdObjMeta.width}
                            height={element.field_icono_inactivo.resourceIdObjMeta.height}
                            alt={element.field_icono.resourceIdObjMeta.alt}
                            className={s.imageInactive}
                        />
                        <p><small>{element.name}</small></p>
                    </div>
                )}
            </RadioGroup.Option>
        ))}
      
    </RadioGroup>
  )
}