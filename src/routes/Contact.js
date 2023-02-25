import React from 'react'
import Contactpage from '../components/Contactpage'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Projectpage from '../components/Projectpage'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Projectpage heading="CONTACT" text="Lets have a chat"/>
      <Contactpage/>
      <Footer/>
    </div>
  )
}

export default Contact