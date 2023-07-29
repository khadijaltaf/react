import React from 'react'
import Header from'./components/header/Header.jsx'
import ServicesProvider from './components/servicesProvider/ServicesProvider.jsx'
import About from './components/about/About.jsx'
import Contact from'./components/contact/Contact.jsx'
import Exp from './components/experience/Exp.jsx'
import Footer from './components/footer/Footer.jsx'
import Nav from'./components/navbar/Nav.jsx'
// import Check from './components/check/check.jsx'
import Testm from './components/testimonals/Testm.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'



const App = () => {
  return (
    <>
      <ErrorBoundary>

        {/* <Check /> */}
        <Header /> <br /><br />
        <Nav />
        <About />
        <Exp />
        <ServicesProvider />
        <Testm />
        <Contact />
        <Footer />
      </ErrorBoundary>
    </>
  )
}

export default App