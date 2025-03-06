import React from 'react';
import style from './Footer.module.css';

function Footer() {
    return ( 
        <>
        <div className={style.footerContaner}>
            <br />
        <div className={style.socialMedia}>
            <h3>Social Media</h3>
            <ul>
                <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fab fa-youtube"></i></a></li>

            </ul>
        </div>

        <div className={style.footerContent}>

            <div className={style.location}>
                 <h3>Location</h3>
                 <p>Travel Dose</p>
                 <p>123, XYZ Street , City, Country</p>
             </div>

             <div className={style.links}>
                 <h3>Links</h3>
                 <ul>
                     <li><i className="fa-solid fa-house"></i><a href="/"> Home</a></li>
                     <li><i className="fa-solid fa-book"></i><a href="/about"> About</a></li>
                     <li><i className="fa-solid fa-headset"></i><a href="/contact"> Contact</a></li>
                 </ul>
             </div>

             <div className={style.contact}>
                 <h3>Contact Us</h3>
                 <p>Email:  info@traveldose.com</p>
                 <p>Phone: +91 1234567890</p>
             </div>


             
        </div>

        
        <div className={style.newsletter}>
            <div className={style.newsletterContent}>
                <div className={style.text}>
                    <h3>Newsletter</h3>
                    <p>Subscribe to our newsletter to get the latest offers and news.</p>
                </div>

                <div className={style.submitionbox}>
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </div>
            </div>
            
        </div>

        <div className={style.footer}>
            <p>Copyright © 2022 Travel Dose. All rights reserved.</p>
        </div>


        </div>


        

        </> 
    
);
}

export default Footer;