import Header from '../Header'
import TransitionProvider from '../Transition'

export default function Layout ({ 
  children
}) {
  return (
    <>
      <Header />
      <TransitionProvider>
        { children }
      </TransitionProvider>
    </>
  )
}