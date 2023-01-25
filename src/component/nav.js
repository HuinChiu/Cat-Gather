import React from "react";
import {useState} from 'react';
import { Routes, Route } from "react-router-dom";
import SignInBtn from "./signin";

const Navigation=()=>{
    const [signinpop,setSigninPop] = useState("false");
    return(
        <nav>
            <div className="nav__item nav__logo">Cat Gather</div>
            <div className="nav__item nav__sign">
                <div className="nav__sign__item signin" onClick={()=>{setSigninPop("true")}}>登入</div>
                <div className="nav__sign__item tryme">Try Gather</div>
            </div>
            <SignInBtn signinpop={signinpop} setSigninPop={setSigninPop}></SignInBtn>
        </nav>
        
    )
}

export default Navigation;