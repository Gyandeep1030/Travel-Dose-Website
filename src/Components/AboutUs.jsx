import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.text}>
        Welcome to <strong>Travel Dose</strong>, your trusted partner in creating unforgettable travel experiences! We are passionate about exploring the world and helping our clients discover the beauty of diverse cultures, breathtaking landscapes, and hidden gems across the globe.
      </p>
      
      <h2 className={styles.subtitle}>Our Story</h2>
      <p className={styles.text}>
        Founded with a vision to make travel seamless and enjoyable, <strong>Travel Dose</strong> has been curating unique travel experiences for adventurers, families, and business travelers alike. Our journey began with a simple idea: to offer personalized travel services that cater to every traveler’s unique needs and interests.
      </p>
      
      <h2 className={styles.subtitle}>What We Offer</h2>
      <ul className={styles.list}>
        <li>Custom Travel Packages: Tailored itineraries to match your preferences.</li>
        <li>Adventure & Leisure Tours: From thrilling activities to relaxing getaways.</li>
        <li>Corporate Travel Solutions: Hassle-free business travel arrangements.</li>
        <li>Luxury & Budget-Friendly Options: Trips that fit every budget without compromising quality.</li>
        <li>24/7 Support: Dedicated customer service to ensure a smooth journey.</li>
      </ul>
      
      <h2 className={styles.subtitle}>Why Choose Us?</h2>
      <ul className={styles.list}>
        <li><strong>Expert Knowledge:</strong> Our team consists of experienced travel enthusiasts who provide firsthand insights and recommendations.</li>
        <li><strong>Personalized Services:</strong> We believe every traveler is unique, and we craft experiences accordingly.</li>
        <li><strong>Affordable & Transparent Pricing:</strong> No hidden costs – just great deals.</li>
        <li><strong>Sustainable Travel:</strong> We promote eco-friendly tourism and support local communities.</li>
      </ul>
      
      <h2 className={styles.subtitle}>Join Us on Your Next Adventure</h2>
      <p className={styles.text}>
        Whether you’re looking for a weekend getaway, a honeymoon destination, or a cultural exploration, <strong>Travel Dose</strong> is here to make your dream trip a reality. Let’s create memories that last a lifetime!
      </p>
      
      <h2 className={styles.subtitle}>Contact Us</h2>
      <p className={styles.contact}>[Email Address] | [Phone Number] | [Website URL] | [Social Media Links]</p>
    </div>
  );
};

export default AboutUs;
