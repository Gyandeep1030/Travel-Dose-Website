import React from 'react';
import { HeroSection } from './HeroSection';
import Footer from './Footer';

function About() {
    return (  
        <div >
            <HeroSection 
                className = "hero"
                img = "src\assets\night.jpg"
                title = "About Us"
                description = "Travel Dose is a travel blog that provides travel tips, guides, and inspiration to help you plan your next vacation."
                descriptionText = "AboutText"
                button = "buttonHidden"
    
            />
            <Footer />
        </div>
    );
}

export default About;