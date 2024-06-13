// import React from "react";
// import ReactDOM from "react-dom/client"
// import App from './App'
// const root = ReactDOM.createRoot(document.getElementById("demo"));
// root.render(
//   <>
//   <App/>
//   </>
// )

//create to load multiple html elements

import React from "react";
import ReactDOM  from "react-dom/client";
import FragmentApp from './FragmentsDemo'

const root=ReactDOM.createRoot(document.getElementById("demo"));
root.render(
  <>
    <FragmentApp/>
  </>
)