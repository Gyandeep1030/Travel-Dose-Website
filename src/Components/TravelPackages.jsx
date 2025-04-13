import React from "react";
import styles from "./TravelPackages.module.css";
import img1 from "../assets/13.jpg";
import img2 from "../assets/Paris, France.jpg";
import img3 from "../assets/Tokyo, Japan.jpg";
import img4 from "../assets/Maldives.jpg";
import img5 from "../assets/Goa.jpg";
import img6 from "../assets/Manali.jpg";
import img7 from "../assets/Singapore.jpg";

const travelData = [
  {
    id: 1,
    name: "Bali, Indonesia",
    image: {img1},
    location: "Indonesia",
    price: "$799",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 2,
    name: "Paris, France",
    image: {img2},
    location: "France",
    price: "$999",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 3,
    name: "Tokyo, Japan",
    image: {img3},
    location: "Japan",
    price: "$899",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 4,
    name: "Maldives ",
    image: {img4},
    location: "Maldives",
    price: "$1199",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 4,
    name: "GOA ",
    image: {img5},
    location: "GOA",
    price: "$199",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 4,
    name: "Manali",
    image: {img6},
    location: "Manali",
    price: "$1199",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 4,
    name: "Singapore",
    image:{img7},
    location: "Singapore",
    price: "$1199",
    rating: "⭐⭐⭐⭐⭐",
  },
];

const TravelPackages = () => {




  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Explore Our Travel Packages</h2>
      <div className={styles.grid}>
        {travelData.map((travel) => (
          <div key={travel.id} className={styles.card}>
            <img src={travel.image} alt={travel.name} className={styles.image} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{travel.name}</h3>
              <p className={styles.location}>{travel.location}</p>
              <div className={styles.details}>
                <span className={styles.price}>{travel.price}</span>
                <span className={styles.rating}>{travel.rating}</span>
              </div>
              
              <a href="/contact"><button className={styles.contactButton}>Contact Me</button></a>
            </div>
          </div>
        ))}
      </div>
    </div> 
  );
};

export default TravelPackages;