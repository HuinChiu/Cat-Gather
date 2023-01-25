import "../css/index.scss";
import "../css/header.scss";
import "../css/signin.scss";
import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter} from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <App></App>
    </>

    // <BrowserRouter>
    //     <div>Hello</div>
    // </BrowserRouter>


);