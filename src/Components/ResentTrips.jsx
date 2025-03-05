import React from 'react';
import TripBoard from './TripBoard';
import style from "./ResentTrips.module.css";


function ResentTrips() {
    return ( 
        <div className={style.mainBody}>
            <h1>Resent Trips</h1>
            <div className={style.BoardBody}>
                <TripBoard img = "src/assets/5.jpg"  PlaceName = "Switzerland" Discription = "Nestled in the heart of Europe, Switzerland is renowned for its breathtaking landscapes, pristine lakes, and majestic Alps. Whether you're an adventure seeker eager for skiing and hiking, or a culture enthusiast drawn to charming cities like Zurich and Geneva, Switzerland offers a harmonious blend of natural beauty and cosmopolitan sophistication."/>
                <TripBoard img = "src/assets/11.jpg"  PlaceName = "Bangkok" Discription = "Vibrant and bustling, Bangkok is Thailand's electrifying capital, known for its rich cultural heritage and modern dynamism. Explore ornate temples such as Wat Arun and Wat Phra Kaew, indulge in the flavors of street food markets, and immerse yourself in the lively nightlife. From floating markets to high-rise skyscrapers, Bangkok is a city of contrasts that never ceases to amaze."/>
                <TripBoard img = "src/assets/10.jpg"  PlaceName = "Goa" Discription = "India's coastal gem, Goa is a tropical paradise famous for its sandy beaches, azure waters, and laid-back vibe. Whether you're in the mood for sunbathing, water sports, or exploring Portuguese heritage in Old Goa, this destination has it all. Savor the delicious seafood, soak in the sunset views, and enjoy the vibrant nightlife – Goa is a slice of beachside bliss."/>
            </div>
        </div>
     );
}
export default ResentTrips;