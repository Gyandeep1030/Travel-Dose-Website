import React from 'react';
import { HeroSection } from './HeroSection';
import Footer from './Footer';
import Form from './ContactForm';
import ResentTrips from './ResentTrips';

function Contact() {
    return ( 
       <div >
            <HeroSection 
                className = "hero"
                img = "src/assets/1.jpg"
                title = "Contact Us"
                description = "We are here to help you with any questions you may have. Feel free to reach out to us."
                descriptionText = "HomeText"
                button = "buttonHidden"
            />

            <Form />
            <ResentTrips />


            <Footer />
        </div>
     );
}

export default Contact;