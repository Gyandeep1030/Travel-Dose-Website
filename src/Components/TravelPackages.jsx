import React from "react";
import styles from "./TravelPackages.module.css";

const travelData = [
  {
    id: 1,
    name: "Bali, Indonesia",
    image: "src/assets/Bali, Indonesia.jpg",
    location: "Indonesia",
    price: "$799",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 2,
    name: "Paris, France",
    image: "src/assets/Paris, France.jpg",
    location: "France",
    price: "$999",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 3,
    name: "Tokyo, Japan",
    image: "src/assets/Tokyo, Japan.jpg",
    location: "Japan",
    price: "$899",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 4,
    name: "Maldives ",
    image: "src/assets/Maldives.jpg",
    location: "Maldives",
    price: "$1199",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 4,
    name: "GOA ",

    image: "src/assets/GOA.jpg",
    location: "GOA",
    price: "$199",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 4,
    name: "Manali",
    image: "src/assets/Manali.jpg",
    location: "Manali",
    price: "$1199",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 4,
    name: "Singapore",
    image: "src/assets/Singapore.jpg",
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