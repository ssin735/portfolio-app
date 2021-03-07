import React from "react";
import Typed from 'react-typed';
import {Link} from "react-scroll";

const Header = () => {
    return (
        <div id="home" className="header-wraper">
           <div className="main-info">
            <h1> Snehil Singh </h1>
            <Typed
            className="typed-text"
            strings={["Web Developer", "Web Designer","Mobile Developer","Software Engineer"]}
            typeSpeed={20}
            backSpeed={60}
            loop
            />

            <Link smooth={true} to="contacts" offset={-110} href="#" className="btn-main-offer"> Contact Me</Link>
            </div> 
        </div>
    )
}

export default Header;
