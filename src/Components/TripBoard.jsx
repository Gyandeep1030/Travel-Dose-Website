import React from 'react';
import style from "./Tripboard.module.css";
function TripBoard(props) {
    return ( 
        <div className={style.TripBoard}>
            <div className={style.img}>
              <img src={props.img} alt="img" />
            </div>
            <h2>{props.PlaceName}</h2>
            <p>{props.Discription}</p>
        </div>
     );
}

export default TripBoard;