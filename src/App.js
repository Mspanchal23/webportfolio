import React from 'react'
import Navigation from './components/Navigation'
import Home from './components/Home/Home'
import About from './components/About/About'
import Languages from './components/Languages/Languages'
import Carrer from './components/Carrer/Carrer'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Cursor from './components/Cursor/Cursor'

const App = () => {
  return (
    <>
      <Cursor />
      <Navigation />
      <main>
        <Home />
        <About />
        <Languages />
        <Carrer />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
