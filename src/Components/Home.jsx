import React from 'react';
import { HeroSection } from './HeroSection';
import Destination from './Destination';
import ResentTrips from './ResentTrips';
import Footer from './Footer';
function Home() {
    return ( 
        <div >
            <HeroSection 
                className = "heroHome"
                img = "src/assets/12.jpg"
                title = "Welcome to Travel Dose"
                description = "Discover the world, experience the magic, and uncover the hidden gems."
                descriptionText = "HomeText"
                buttonLabel = "Discover Now"
                button = "button"
            />
            <Destination />
            <ResentTrips />
            <Footer />


        </div>
     );
}

export default Home;