import React,{useState} from "react";
import emailjs from 'emailjs-com';
import {useForm} from "react-hook-form";

const Contacts = () => {

    const [successMessage, setSuccessMessage] = useState("");
    const{register,handleSubmit,errors} = useForm();

    const serviceID = "service_ifarlgd";
    const templateID = "template_tempID";
    const userID = "user_FYBLGJgOnABW3LSl9izbs";

    const onSubmit = (data, r) => {
        sendEmail(serviceID,
            templateID,
            {
                name:data.name,
                phone:data.phone,
                email:data.email,
                subject:data.subject,
                description:data.description
            },
            userID )

            r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
              setSuccessMessage("Thank You, Your message was sent successfully! I'll contact you as soon as possible.");
          }).catch(err => console.error('Something went wrong ${err}'));
      }



    return (
        <div id="contacts" className="contacts">
            <div className="text-center">
            <h1> Contact Me </h1>
            <p>Please fill out the form to contact me.</p>

            <span className="success-message">{successMessage}</span>
            </div>


        <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className = "col-md-6 col-xs-12">
                    {/* Name input */}

                    <div className="text-center">
                    <input
                    type="text"
                    className="form-control"
                    placeholder = "Your Name"
                    name="name"
                    ref={
                        register({
                            required:"Please enter your name.",
                            maxLength:{
                                value:20,
                                message:"Please enter a name with less than 20 characters."
                            }
                            
                        })
                    }
                    />
                    <div className="line"></div>
                    </div>
                    <span className="error-message">
                        {errors.name && errors.name.message}
                    </span>

                    {/* Phone number  */}
                    <div className="text-center">
                    <input type="text" className="form-control" placeholder = "Phone Number" 
                    name="phone" 
                    ref={
                        register({
                            required:"Please provide your phone number."
                        })
                    }
                    />
                    <div className="line"></div>
                    </div>
                    <span className="error-message">
                        {errors.phone && errors.phone.message}
                    </span>

                    {/* Email  */}
                    <div className="text-center">
                    <input type="email" className="form-control" placeholder = "Email"
                    name="email"
                    ref={
                        register({
                            required:"Please enter your email address.",
                            pattern:{
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message:"email is either incomplete or invalid."
                            }
                            
                        })
                    }
                    />
                    <div className="line"></div>
                    </div>
                    <span className="error-message">
                        {errors.email && errors.email.message}
                    </span>

                    {/* Subject  */}
                    <div className="text-center">
                    <input
                    type="text" className="form-control" placeholder = "Subject"
                    name="subject"/>
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
                    name="description"
                    /> 
                    <div className="line"></div>
                    </div>

                    <button className = "btn-main-offer contacts-btn" type="submit"> Submit </button>
                </div>
            </div>
        </form>
        </div>
    </div>
    )
}

export default Contacts;
