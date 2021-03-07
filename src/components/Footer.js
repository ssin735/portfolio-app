import React from 'react'
import {FacebookShareButton,FacebookIcon,TwitterShareButton,TwitterIcon,RedditShareButton,RedditIcon,LinkedinShareButton,LinkedinIcon} from "react-share";
import {Link} from "react-scroll";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p> 19 Anzac Avenue, Auckland CBD, Auckland, 1010</p>
                        </div>

                        <div className="d-flex">
                            <a href="tel:+64-27-500-1079">+64 27-500-1079</a>
                        </div>
                        <div className="d-flex">
                            <p>snehilsingh2410@gmail.com</p>
                        </div>
                        </div>

                        <div className="col-lg-3 col-md-2 col-sm-6">
                            <div className="row">
                                <div className="col">
                                    <Link smooth={true} to="home" className="footer-nav">Home</Link>
                                    <br/>
                                    <Link smooth={true} to="about" offset={-110} className="footer-nav">About</Link>
                                    <br/>
                                    <Link smooth={true} to="services" offset={-110}className="footer-nav">Services</Link>
                                    <br/>
                                    <Link smooth={true} to="contacts" offset={-110}className="footer-nav">Contact</Link>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton 
                            url={"https://www.linkedin.com/in/snehil-singh-688407160/"}
                            quote={"Software Engineer"}
                            hashtag="#Developer"
                            >
                            <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>

                            <TwitterShareButton 
                            url={"https://www.linkedin.com/in/snehil-singh-688407160/"}
                            quote={"Software Engineer"}
                            hashtag="#Developer"
                            >
                            <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>
                            
                            <RedditShareButton 
                            url={"https://www.linkedin.com/in/snehil-singh-688407160/"}
                            quote={"Software Engineer"}
                            hashtag="#Developer"
                            >
                            <RedditIcon className="mx-3" size={36} />
                            </RedditShareButton>

                            <LinkedinShareButton 
                            url={"https://www.linkedin.com/in/snehil-singh-688407160/"}
                            quote={"Software Engineer"}
                            hashtag="#Developer"
                            >
                            <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Snehil Singh | All Rights Reserved
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
