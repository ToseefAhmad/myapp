import React from 'react';

const name = {name: "Tosee Ahmad"}
const phone = {phone: "#####"}

function Div() {
    return(
        <div className="Contact">
            <p>{name.name}</p>
            <p>{phone.phone}</p>
        </div>
    );
}

function Contact() {
    return(
        <Div />
    );
}

export default Contact;
