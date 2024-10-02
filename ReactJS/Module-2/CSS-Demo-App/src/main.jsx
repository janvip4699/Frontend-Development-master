import React from 'react'
import ReactDOM  from 'react-dom/client'
const root=ReactDOM.createRoot(document.getElementById("demo"));
root.render(
    <>
        <h1 align="center" style={{color:"blue"}}>My name is Janvi</h1>
        <h2 align="center">Addition of numbers is : {10+20}</h2>
        <h2 align="center">Substraction of numbers is : {10-20}</h2>
        <h2 align="center">Multiplication of numbers is : {10*20}</h2>
        <h2 align="center">Division of numbers is : {10/20}</h2>
    </>
)