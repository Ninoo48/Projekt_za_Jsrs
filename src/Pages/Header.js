import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div id="navbar">
                <Link to={"/"}>
                <a class="fancy" href="#">
                    <span class="top-key"></span>
                    <span class="text">Početna</span>
                    <span class="bottom-key-1"></span>
                    <span class="bottom-key-2"></span>
                </a>
                </Link>
                <Link to={"/povijest"}>
                <a class="fancy">
                    <span class="top-key"></span>
                    <span class="text">Povijest grada</span>
                    <span class="bottom-key-1"></span>
                    <span class="bottom-key-2"></span>
                </a>
                </Link>
                <Link to={"/izleti"}>
                <a class="fancy">
                    <span class="top-key"></span>
                    <span class="text">Izleti</span>
                    <span class="bottom-key-1"></span>
                    <span class="bottom-key-2"></span>
                </a>
                </Link>

                <img src="assets/Slike/Split_logo.png" id="logo"/>
                
            </div>
    )
}