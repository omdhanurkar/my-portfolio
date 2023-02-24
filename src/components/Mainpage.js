import React from 'react'
import "./Mainpage.css"
import main from "../assets/main.avif"
import { Link } from 'react-router-dom'

const Mainpage = () => {
    return (
        <div className='main'>
            <div className='mask'>
                <img className='into-img' src={main} alt="main" />

            </div>
            <div className='content'>
                <p>
                    Hi,I'M OMPRAKASH
                </p>
                <h1>
                    BackEnd Developer
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