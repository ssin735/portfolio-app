import React from "react";
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wraper">
           <div className="main-info">
            <h1> Snehil Singh </h1>
            <Typed
            className="typed-text"
            strings={["Web Developer", "Web Designer","Mobile Developer","Software Engineer"]}
            typeSpeed={20}
            backSpeed={60}
            loop
            />

            <a href="#" className="btn-main-offer"> Contact Me</a>
            </div> 
        </div>
    )
}

export default Header;
