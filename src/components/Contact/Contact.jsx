import React, {useState} from 'react';

import Form from "./Form.jsx";
import FormSuccess from "./FormSuccess.jsx";

function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <div id="contact">
            {!isSubmitted ? (<Form submitForm={submitForm} />) : (<FormSuccess />)}
        </div>
    )
}

export default Contact
