import React from 'react';
import style from "./Destination.module.css";


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
                    <img src="src\assets\5.jpg" alt="img1"/>
                    <img src="src\assets\4.jpg" alt="img2" />
                </div>
            </div>

            <div className={style.destination}>
            <div className={style.img}>
                    <img src="src\assets\6.jpg" alt="img1"/>
                    <img src="src/assets/8.jpg" alt="img2" />
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