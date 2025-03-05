import React from 'react';
import './ContactForm.module.css';
function Form() {
    return ( 
        <div>
            <form>
                <label for="name">First Name:</label>
                <input type="text" id="name" name="name" required></input>
                <label for="name">Last Name:</label>
                <input type="text" id="name" name="name" required></input>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required></input>
                <label for="phone">Phone:</label>   
                <input type="tel" id="phone" name="phone" required></input>
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
     );
}

export default Form;