import { useEffect } from 'react'
import { useFrame } from '@/hooks/use-frame'
// import { useStore } from '@/lib/store'

export default function useScroll (options) {  
  const [scroll, setScroll] = useStore(state => [
    state.scroll, 
    state.setScroll
  ]) 

  useEffect(() => {  
    window.scrollTo(0, 0)

    const Scroll = require('@/lib/scroll').default
    
    const scroll = new Scroll({
      ...options
    })

    setScroll(scroll)

    return () => {
      scroll && scroll.destroy()
  
      setScroll(undefined)
    }
  }, [])

  useFrame(time => {
    scroll?.raf(time)
  })

  return {
    scroll
  }
}