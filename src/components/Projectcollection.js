import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Projectcollection.css"



const Projectcollection = (props) => {
    return (

        <div className='project-card'>
            <img src={props.imgsrc} alt="img" />
            <h2 className='project-title'>{props.title}</h2>
            <div className='pro-details'>
                <p>{props.text}</p>
                <div className='pro-btns'>
                    <NavLink to={props.sourcecode} className="btn">Source code</NavLink>
                </div>
            </div>
        </div>


    )
}

export default Projectcollection