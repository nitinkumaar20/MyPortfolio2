import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar'
import { Home } from './components/Home'
import AboutMe from './components/AboutMe'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    <AboutMe/>
    <Services/>
    <Portfolio/>
    <Contact/>
  <Footer/>

    </>
  )
}

export default App
