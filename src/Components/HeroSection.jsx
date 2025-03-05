import React from 'react'
import style from './HeroSection.module.css'

export const HeroSection = (props) => {
    // Destructuring props object to access its properties directly
  let { className, img, title, description, descriptionText, buttonLabel , button } = props;
  return (
    <div className={style[className]}>
        <img src={img} alt="heroImg" className={style.heroImg} />

        <div className={style.heroText}>
            <h1 >{title}</h1>
            <p className={style[descriptionText]}>{description}</p>
            <button className={style[button]}>{buttonLabel}</button>
        </div>
  
    </div>
  )
}
