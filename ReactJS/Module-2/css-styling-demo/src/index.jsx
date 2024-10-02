import React from "react";
import ReactDOM from "react-dom/client";
// import Inline from "./Inline";
// import Internal from "./Internal";
import External from "./External";
import './assets/CSS/style.css';

const root = ReactDOM.createRoot(document.getElementById("css-style-demo"));
root.render(
    <>
        {/* <Inline/> */}
        {/* <Internal/> */}
        <External/>
    </>
)