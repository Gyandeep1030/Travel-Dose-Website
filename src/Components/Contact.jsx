import React from 'react';
import { HeroSection } from './HeroSection';
import Footer from './Footer';
import Form from './ContactForm';
import RecentTrips from './RecentTrips';
import img1 from '../assets/1.jpg';

function Contact() {
    return ( 
       <div >
            <HeroSection 
                className = "hero"
                img = {img1}
                title = "Contact Us"
                description = "We are here to help you with any questions you may have. Feel free to reach out to us."
                descriptionText = "HomeText"
                button = "buttonHidden"
            />

            <Form />
            <RecentTrips />


            <Footer />
        </div>
     );
}

export default Contact;