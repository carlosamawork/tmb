import { 
  createContext, 
  useCallback
} from 'react'

import { 
  SwitchTransition, 
  Transition 
} from 'react-transition-group'

import { useRouter } from 'next/router'


const TransitionContext = createContext()

export default function TransitionProvider ({ children }) {

  const router = useRouter()

  const onEnter = useCallback(element => {
    window.scrollTo(0, 0) 

  }, [router.asPath]) 

  return (
    <TransitionContext.Provider value={{}}>
      <SwitchTransition>
        <Transition
          key={router.asPath}
          in={true}
          timeout={{
            exit: 0,
            enter: 0
          }}
          onEnter={onEnter}
          mountOnEnter={true}
          unmountOnExit={true}
        > 
          { children }
        </Transition>
      </SwitchTransition>
    </TransitionContext.Provider>
  )
} 

export {
  TransitionContext
}