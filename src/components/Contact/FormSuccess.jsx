import React from 'react';
import Success from "../../image/success.svg";

import "./FormSuccess.scss";

function FormSuccess() {
    return (
        <div className="form__success">
            <h1>We have recived Your request!</h1>
            <img src={Success} alt="Success" />
        </div>
    )
}

export default FormSuccess;
