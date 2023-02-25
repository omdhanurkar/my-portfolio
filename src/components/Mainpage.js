import React from 'react'
import "./Mainpage.css"
import main from "../assets/main.avif"
import { Link } from 'react-router-dom'
import TypeWriter from "react-typewriter";


const Mainpage = () => {
    let name = "OMPRAKASH DHANURKAR"
    return (

        <div className='main'>
            <div className='mask'>
                <img className='into-img' src={main} alt="main" />

            </div>
            <div className='content'>
                <h1 className='name'>
                    <TypeWriter typing={0.5}>{name ? `I'M ${name}` : null}</TypeWriter>
                </h1>

                <h1>
                    Backend Developer
                </h1>
                <div>
                    <Link to="/project" className='btn'>Projects

                    </Link>
                    <Link to="/contact" className='btn btn-light'>Contact

                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Mainpage