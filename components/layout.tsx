import Header from './Header'
import Footer from './Footer'
import TransitionProvider from './Transition'

export default function Layout ({ 
  children
}) {
  console.log(children)
  return (
    <>
      <Header props={children} />

      <TransitionProvider>
        { children }
      </TransitionProvider>

      <Footer socialMenu={children.props.socialMenu} datosMenu={children.props.datosMenu} copyright={children.props.copyright} footerMenu={children.props.footerMenu}/>
    </>
  )
}
