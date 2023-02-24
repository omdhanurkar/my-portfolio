import React from 'react'
import Footer from '../components/Footer'
import Mainpage from '../components/Mainpage'
import Navbar from '../components/Navbar'
import Work from "../components/Work"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Mainpage />
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home