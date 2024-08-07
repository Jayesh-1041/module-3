import React from "react";
import ReactDOM from "react-dom/client"
import Name from "./Name"
import App from "./NameApp"
import Style from "./ExternalStyle";
import './assets/css/style.css'


const root=ReactDOM.createRoot(document.getElementById("demo-app"))
root.render(
    <>
    <Name/>
    <App/>
    <Style/>
    
    </>
)