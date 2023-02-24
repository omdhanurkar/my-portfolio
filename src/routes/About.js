import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Projectpage from '../components/Projectpage'
import Aboutpage from "../components/Aboutpage"

const About = () => {
  return (
    <div>
      <Navbar/>
      <Projectpage heading="ABOUT" text="I'm a Backend Developer" />
      <Aboutpage/>
      <Footer/>
    </div>
  )
}

export default About