import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSwift,faReact,faWindows } from '@fortawesome/free-brands-svg-icons';
import { faDesktop ,faFileCode} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
        <div className="services">
        <h1 className="py-5"> my services </h1>
            <div className="container">
                <div className="row">

                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className= "circle"> <FontAwesomeIcon className="icon" icon={faSwift} size="2x" /> </div>
                            <h3> iOS Applications - Native </h3>
                            <p> Swift and Objective-C </p>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                        <div className= "circle"> <FontAwesomeIcon className="icon" icon={faReact} size="2x" /> </div>
                            <h3> Web Development </h3>
                            <p> Javascript, CSS, ReactJS, .Net and NodeJS </p>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                        <div className= "circle"> <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /> </div>
                            <h3> Cross-platform Applications </h3>
                            <p> Xamarin and Universal Windows Platform</p>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                        <div className= "circle"> <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /> </div>
                            <h3> Web Design </h3>
                            <p> Aesthetic User Interface and smooth User Experience (UX).</p>
                        </div>
                    </div>

                </div> 
            </div>
        </div>
    )
}

export default Services
