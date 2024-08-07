import React from "react";
import ReactDOM from "React-dom/client"
import App from "./Newapp"
import Style from "./External";
import './assets/css/style.css'

const root=ReactDOM.createRoot(document.getElementById("new-app"))
root.render(
    <>
    <App/>
    <Style/>
    </>
)

