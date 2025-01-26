import React from 'react'
import Navigation from './components/Navigation'
import Home from './components/Home/Home'
import Summery from './components/Summery/Summery'
import Languages from './components/Languages/Languages'
import Process from './components/Process/Process'
import Projects from './components/Projects/Projects'
import Carrer from './components/Carrer/Carrer'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Progress from './components/Progress/Progress'
import Theme from './components/Theme/Theme'

const App = () => {
  return (
  <>
    <Theme />
    <Progress />
  <div className='container'>
    <Navigation />
    <Home />
    <Summery />
    <Languages />
    {/* <Process /> */}
    <Projects />
    <Carrer />
    <About />
    <Contact />
    <Footer />
  </div>
  </>
  )
}

export default App
