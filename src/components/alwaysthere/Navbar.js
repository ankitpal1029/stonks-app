import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    console.log('punda')
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <ul className="left">
                    <Link to='/'>KeK</Link>
                </ul>
                <ul className="right">
                    <li>Post Meme</li>
                    <li>Log Out</li>
                    <li>Sign Up</li>
                    <li><Link to='/' className='btn btn-floating yellow lighten-1 text-black'>YB</Link></li>
                </ul>


            </div>
        </nav>
    )
}

export default Navbar;