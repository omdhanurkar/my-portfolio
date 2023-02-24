import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Projectpage from '../components/Projectpage'
import Work from '../components/Work';
const Project = () => {
  return (
    <div>
      <Navbar />
      <Projectpage heading="PROJECTS" text="Some of my most recent works" />
      <Work />
      <Footer />

    </div>
  )
}

export default Project