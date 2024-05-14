import './contact-box.css';

import React from 'react';

const ContactUs = ({ onHide }) => {
    const sentence = `Hey <(^ v ^)> I am {your-name}, I have checked your To-Do-List app and it is {your-review}.`;

    const igLink = `https://www.instagram.com/murali.manas30/`;
    const waLink = `https://wa.me/+919121886918?text=${encodeURIComponent(sentence)}`;

    return (
        <div className="contact-box" onClick={onHide}>
            <a href="mailto:muralimanas30@gmail.com">
                <i className="fa-solid fa-envelope" alt="Email"></i>
            </a>
            <a href={igLink} target='_blank' rel="noopener noreferrer" title='Visit Instagram'>
                <i className="fa-brands fa-instagram" alt="Instagram"></i>
            </a>
            <a title='Text on WhatsApp' target='_blank' rel="noopener noreferrer" href={waLink}>
                <i className="fa-brands fa-whatsapp" alt="WhatsApp"></i>
            </a>
            <a title='Call us' target='_blank' rel="noopener noreferrer" href="tel:+919121886918">
                <i className="fa-solid fa-phone" alt="Phone"></i>
            </a>
        </div>
    );
}

export default ContactUs;
