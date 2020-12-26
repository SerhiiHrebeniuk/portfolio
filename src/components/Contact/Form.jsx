import React from 'react';
import useForm from "./UseForm.jsx";
import ValidateForm from "./ValidateForm.jsx";

import "./Contact.scss";

function Contact ({submitForm}) {

    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, ValidateForm );
    

    return (
        <div className="contact__container">
            <h1>Contact</h1>
            <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="form__inputs">
                            <label htmlFor="name" className="form__label">Name</label>
                            <input 
                                id="name" 
                                type="text" 
                                name="Name" 
                                className="form__input"
                                placeholder="Enter Your Name"
                                value={values.Name}
                                onChange={handleChange}
                             />
                             {errors.Name && <p>{errors.Name}</p>}
                        </div>
                        <div className="form__inputs">
                            <label htmlFor="email" className="form__label">Email</label>
                            <input 
                                id="your email" 
                                type="email" 
                                name="Email" 
                                className="form__input" 
                                placeholder="Enter Your Email"
                                value={values.Email}
                                onChange={handleChange}
                            />
                            {errors.Email && <p>{errors.Email}</p>}
                        </div>      
                        <div className="form__inputs">
                            <label htmlFor="subject" className="form__label">Subject</label>
                            <input 
                                id="subject" 
                                type="text" 
                                name="Subject" 
                                className="form__input" 
                                placeholder="Enter Your Subject"
                                value={values.Subject}
                                onChange={handleChange}
                            />
                            {errors.Subject && <p>{errors.Subject}</p>}
                        </div>
                        <div className="form__inputs">
                            <label htmlFor="message" className="form__label">Message</label>
                            <textarea 
                                id="massage" 
                                type="text" 
                                name="Message" 
                                className="form__input" 
                                placeholder="Enter Your Message"
                                value={values.Massage}
                                onChange={handleChange}
                            />
                            {errors.Message && <p>{errors.Message}</p>}
                        </div>
                <button className="form__btn" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;
