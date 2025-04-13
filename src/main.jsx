import React from "react";
import ReactDOM from "react-dom/client";
import App from "../App";
import "./index.css"
import { BrowserRouter } from "react-router-dom";

console.log(React); // Logs React object
console.log(ReactDOM); // Logs ReactDOM object

// Create root
let root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

// Render App inside BrowserRouter
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);