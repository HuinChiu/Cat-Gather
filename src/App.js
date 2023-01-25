import React from "react";
import {useState} from 'react';
import { Routes, Route } from "react-router-dom";
import Navigation from "./component/nav";
import Header from "./component/header";
const App=()=>{
    return(
        <>
        <Navigation></Navigation>
        <Header></Header>
        {/* <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/list" element={<ListPage></ListPage>}></Route>
        </Routes> */}
        </>


    )
}

export default App;