import React from 'react'
import "./Projectpage.css"

const Projectpage = (props) => {
    return (
        <div className='pro-img'>

            <div className='heading'>
                <h1>{props.heading}</h1>
                <p>{props.text}</p>
            </div>

        </div>
    )
}

export default Projectpage
