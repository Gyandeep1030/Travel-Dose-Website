import React from 'react';
import style from "./Destination.module.css";
import img5 from '../assets/5.jpg';
import img4 from '../assets/4.jpg';
import img6 from '../assets/6.jpg';
import img8 from '../assets/8.jpg';


function Destination() {
    return ( 
        <div className={style.destinationContainer}>
            <h1 className={style.heading}>Popular Destinations</h1>
            <div className={style.destination}>
                <div className={style.text}>
                <h2>Delhi</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quaerat pariatur enim ullam? Veritatis quisquam culpa odio temporibus, autem quis natus possimus. Reprehenderit suscipit dicta, consequatur laborum labore ipsam perspiciatis.</p>
                </div>
                <div className={style.img}>
                    <img src={img5} alt="img1"/>
                    <img src={img4} alt="img2" />
                </div>
            </div>

            <div className={style.destination}>
            <div className={style.img}>
                    <img src={img6} alt="img1"/>
                    <img src={img8} alt="img2" />
                </div>
                <div className={style.text}>
                <h2>Mumbai</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quaerat pariatur enim ullam? Veritatis quisquam culpa odio temporibus, autem quis natus possimus. Reprehenderit suscipit dicta, consequatur laborum labore ipsam perspiciatis.</p>
                </div>
            </div>

        </div> 
    );
}

export default Destination;