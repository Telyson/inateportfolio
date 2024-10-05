import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Biography from './components/Biography'
import Experience from './components/Experience'
import Experience2 from './components/Experience2'
import Projects from './components/Projects'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

const App1 = () => {
  return (
    <div className='bg-slate-950  mx-auto px-14 sm:px-20'>
        <Navbar />
        <Home />
        <Biography />
        {/* <Experience /> */}
        <Experience2 />
        <Projects />
        <Testimonial />
        <Footer />

        {/* <p className='text-white text-center font-syne font-semibold'>&copy 2024 All rights reserved.</p> */}
    </div>
  )
}

export default App1