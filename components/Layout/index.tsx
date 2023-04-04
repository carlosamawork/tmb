import { useState } from 'react';
import Header from '../Header'
import TransitionProvider from '../Transition'

export default function Layout ({ 
  children
}) {
  const [display, setDisplay] = useState(false);
  
  return (
    <>
      <Header props={undefined}/>
      <TransitionProvider>
        { children }
      </TransitionProvider>
    </>
  )
}