import React from 'react'
import {Link} from 'react-router-dom'
import './Navigation.css'

function Navigation(){
    return(
        <div className="nav">
            <div className = "home-btn"><Link to='/'>Home</Link></div>
            <div className = "about-btn"><Link to = '/About'>About</Link></div>
        </div>
    )
}

export default Navigation; 