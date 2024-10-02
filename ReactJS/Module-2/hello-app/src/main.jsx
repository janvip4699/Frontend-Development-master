import react from 'react';
import ReactDOM  from 'react-dom/client';
import MyApp from './MyApp';
const root=ReactDOM.createRoot(document.getElementById("hello"));
root.render
(
    <>
        <h1 align="center" style={{"fontSize":"100px"}}>Hello World !!</h1>
        <MyApp/>
    </>
)