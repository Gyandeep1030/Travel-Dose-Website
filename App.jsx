
import Navbar from "./src/Components/NavBar";
import Home from "./src/Components/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./src/Components/About";
import Contact from "./src/Components/Contact";

let App = () =>{

    return ( 
        <div className="App">
            <Navbar />
        
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            
        </div>

     );
}

export default App;