import React from "react";

const Contacts = () => {
    return (

        <div className="contacts">
            <div className="text-center">
            <h1> Contact Me </h1>
            <p>Please fill out the form to contact me.</p>
            </div>


        <div className="container">

            <div className="row">

                <div className = "col-md-6 col-xs-12">
                    {/* Name input */}

                    <div className="text-center">
                    <input
                    type="text"
                    className="form-control"
                    placeholder = "Your Name"
                    name="name"
                    />
                    <div className="line"></div>
                    </div>

                    {/* Phone number  */}
                    <div className="text-center">
                    <input type="text" className="form-control" placeholder = "Phone Number" phone="phone" />
                    <div className="line"></div>
                    </div>

                    {/* Email  */}
                    <div className="text-center">
                    <input type="email" className="form-control" placeholder = "Email"
                    email="email"/>
                    <div className="line"></div>
                    </div>

                    {/* Subject  */}
                    <div className="text-center">
                    <input
                    type="text" className="form-control" placeholder = "Subject" subject="subject"/>
                     <div className="line"></div>
                     </div>

                </div>
                   

                <div className="col-md-6 col-xs-12">
                    {/* Description  */}
                <div className="text-center">
                <textarea
                    type = "text"
                    className="form-control"
                    placeholder = "Please describe your project requirements."
                    desciption="description"
                    /> 
                    <div className="line"></div>
                    </div>

                    <button className = "btn-main-offer contacts-btn" type="submit"> Submit </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Contacts;
