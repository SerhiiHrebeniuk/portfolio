import React, {useState} from 'react'; 


import "./BurgerNavBar.scss";

function BurgerNavbar() {

    const [open, setOpen] = useState(false);
    console.log("hello");

    return (
        <div className="burger__menu" id="burger" open={open} onClick={() => setOpen(!open)}>
            <div className="burger__icon"  />
            <div className="burger__icon" />
            <div className="burger__icon" />
        </div>
    )
}

export default BurgerNavbar;
