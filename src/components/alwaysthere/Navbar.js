import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'





const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <ul className="left">
                    <Link to='/'><i className="yellow-text">KeK</i></Link>
                </ul>
                <ul className="right">
                    <li>Post Meme</li>
                    <li><Link to='signin'>Sign In</Link></li>
                    <li><Link to='/signup'>Sign Up</Link></li>
                    <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons cyan-text text-lighten-3">menu</i></a>
                    {/* <li><Link to='/' className='btn btn-floating yellow lighten-1 text-black'>YB</Link></li> */}
                </ul>


            </div>
        </nav>
    )
}

export default Navbar;
