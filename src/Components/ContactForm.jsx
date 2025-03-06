import React, { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Let us Know your Query</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              value={formData.name} 
              onChange={handleChange} 
              className={styles.input} 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email address" 
              value={formData.email} 
              onChange={handleChange} 
              className={styles.input} 
            />
          </div>
          <input 
            type="text" 
            name="subject" 
            placeholder="Subject" 
            value={formData.subject} 
            onChange={handleChange} 
            className={styles.inputFull} 
          />
          <textarea 
            name="message" 
            placeholder="Message" 
            value={formData.message} 
            onChange={handleChange} 
            className={styles.textarea} 
          ></textarea>
          <button type="submit" className={styles.button}>Submit</button>
        </form>
      </div>
      <div className={styles.infoContainer}>
        <h2 className={styles.infoTitle}>Get in Touch</h2>
        <p className={styles.infoText}>Have questions or need assistance? You can reach us via the form or directly using the details below.</p>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509789!2d-122.41941548468146!3d37.77492927975909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e1b2a12f8c9%3A0x4a80f495dc78a1bd!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1615939192324!5m2!1sen!2sus" 
          className={styles.map} 
          allowFullScreen="" 
          loading="lazy">
        </iframe>
        <p><strong>Location:</strong> KR MANGALAM UNIVERSITY, Sohna - Gurgaon Rd, Haryana 122103</p>
        <p><strong>Email:</strong> Gyandeep1030@gmail.com</p>
        <p><strong>Contact Number:</strong> +91-8076390223</p>
        <div className={styles.socialMedia}>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
