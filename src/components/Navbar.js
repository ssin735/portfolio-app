//rafce Tab autocreates the arrow function layout. 

import React from 'react';
import logo from "../logo.png";
import {Link} from "react-scroll";
//React FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
       <div className="container">  
         
        <a classNameName="navbar-brand" href="#"><img className="logo" src={logo}  alt="logo.."></img> </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <FontAwesomeIcon icon={faBars} style={{color: "#fff" }} />

        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" className="nav-link" href="#">home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">about me</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="services" offset={-110} className="nav-link" href="#">services</Link>
            </li>
           {/* <li className="nav-item">
              <a className="nav-link" href="#">experience</a>
            </li>
            */}
            <li className="nav-item">
              <Link smooth={true} to="contacts" offset={-110} className="nav-link" href="#">contact</Link>
            </li>
        </ul>
        </div>
    </div>
      </nav>
    )
}

export default Navbar
