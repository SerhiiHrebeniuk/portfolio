export default function ValidateForm(values) {
    let errors = {};


    //Name

    if(!values.Name.trim()) {
        errors.Name = "Name required"
    }

    // Email

    if(!values.Email) {
        errors.Email = "Email required"
    } else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(values.Email)) {
        errors.Email = "Email address is invalid"
    }

    // Subject

    if(!values.Subject.trim()) {
        errors.Subject = "Subject required"
    }else if(values.Subject.length >= 20) {
        errors.Subject = "Subject needs to be 20 sumbols or less"
    }

    //Message

    if(!values.Message.trim()) {
        errors.Message = "Message required"
    }else if(values.Message.length >= 200) {
        errors.Message = "Message needs to be 200 sumbols or less"
    }

    return errors;
}