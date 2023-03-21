import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import s from './Selector.module.scss'

export default function Selector({elements, selectedElement, setSelectedElement, initial}) {

  return (
    <Listbox value={selectedElement} onChange={setSelectedElement}>
        <Listbox.Button className={initial.id === 'tipo_0' ? s.buttonSelectLarge : s.buttonSelectSmall}>{selectedElement.name}</Listbox.Button>
        <Listbox.Options className={initial.id === 'tipo_0' ? s.selectorLarge : s.selectorSmall}>
            {elements.map((element) => (
                <Listbox.Option
                    key={element.id}
                    value={element}
                >
                    {element.name}
                </Listbox.Option>
            ))}
        </Listbox.Options>
    </Listbox>
  )
}