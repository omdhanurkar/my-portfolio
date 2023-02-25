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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, sequi!</p>
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