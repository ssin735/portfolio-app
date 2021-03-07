import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className="profile-img" src={author} alt="authorSnehil" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading"> about </h1>
                <p> Hi, I am Snehil. </p> <p> I enjoy creating aesthetic applications for mobile phones and the web. I also dabble in website designing. I try to keep myself informed of recent technologies and trends.</p>
                </div>
                
            </div>
        </div>
    )
}

export default AboutMe
