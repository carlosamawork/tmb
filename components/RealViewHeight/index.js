import { useEffect } from 'react'

export default function RealViewHeight () {  
  useEffect(() => {
    const onResize = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
    }

    onResize()
    
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <></>
  )
}