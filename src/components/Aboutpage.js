import React from 'react'
import { Link } from 'react-router-dom'
import "./Aboutpage.css"
import reactimg1 from "../assets/react1.png"
import reactimg2 from "../assets/react2.jpg"


const Aboutpage = () => {
  return (
    <div className='about'>
      <div className='left'>
        <h1>Who Am I?</h1>
        <p>This is me Omprakash Dhanurkar,<br/>I Graduated in Mechanical
          Engineering form Priyadarshini college of Engineering in 2022 but I was interested in IT Sector so after graduation
          I joined functionup bootcamp Here I learned some technologies like 
          Javascript, Nodejs, MongoDb, ReactJS, etc..
        </p>

        <Link to="/contact">
          <button className='btn'>Contact</button>
        </Link>
      </div>
      <div className='right'>
        <div className='img-container'>
          <div className='img-stack top'>
            <img src={reactimg2} className="img" alt='true' />
          </div>
          <div className='img-stack bottom'>
            <img src={reactimg1} className="img" alt='true' />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Aboutpage