import React from 'react'

import "./Contactpage.css"
const Contactpage = () => {
    return (
        <div className='form'>
            <form action="">
                <label>Your Name</label>
                <input type="text"></input>
                <label>Your Email</label>
                <input type="email"></input>
                <label>Subject</label>
                <input type="text"></input>
                <label>Subject</label>
                <textarea rows="6" placeholder='Type your message here'/>
                <button className='btn'>Submit</button>
            </form>
        </div>
    )
}

export default Contactpage