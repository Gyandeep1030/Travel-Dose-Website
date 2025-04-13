import React from 'react';
import { HeroSection } from './HeroSection';
import Destination from './Destination';
import RecentTrips from './RecentTrips';
import Footer from './Footer';
import TravelPackages from './TravelPackages';
import img12 from '../assets/12.jpg';
function Home() {
    return ( 
        <div >
            <HeroSection 
                className = "heroHome"
                img = {img12}
                title = "Welcome to Travel Dose"
                description = "Discover the world, experience the magic, and uncover the hidden gems."
                descriptionText = "HomeText"
                buttonLabel = "Discover Now"
                button = "button"
            />
            <Destination />
            <TravelPackages />
            <RecentTrips />
            <Footer />


        </div>
     );
}

export default Home;