import React from 'react';
import './Contact.css';

const Contact = () => (
    <div className='main-contain'>
        <div className="head-contact"><h1>Contact</h1></div>
        <div className="contact-line"><p>Contact us at Innomatics Research Labs.</p></div>
        <div className="contact-details">
            <h2>Get in Touch</h2>
            <div className='contact-line'><p>If you have any questions, feel free to reach out to us through the following channels:</p></div>
            <ul>
                <li>Email: info@innomatics.com</li>
                <li>Phone: +123-456-7890</li>
                <li>Address: 123 Innovation Drive, Tech City, TX 75001</li>
            </ul>
        </div>
        <div className="contact-form">
            <h2>Contact Form</h2>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
);

export default Contact;
