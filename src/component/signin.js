import React from "react";
import {useState} from 'react';
import { Routes, Route } from "react-router-dom";

const SignInBtn=(props)=>{
    console.log("hello")
    console.log(props)
    if(props.signinpop=="true"){
        return(
        <div className="sigin">
            <div className="signin__box">
                <div className="signin__item signin__title">登入帳號
                    <div className="signin__close__btn" onClick={()=>{props.setSigninPop("false")}}>
                        <div className="signin__close__item1"></div>
                        <div className="signin__close__item2"></div>
                    </div>
                </div>
                <div className="signin__item sigin__account"><span className="sigin__account">帳號</span><input type={"text"}></input></div>
                <div className="signin__item signin__error">帳號輸入錯誤</div>
                <div className="signin__item sigin__password"><span className="sigin__password">密碼</span><input type={"password"}></input></div>
                <div className="signin__item signin__error">密碼輸入錯誤</div>
                <button className="signin__item signin__btn">登入</button>
            </div>
        </div>
        )
    }

}

export default SignInBtn;