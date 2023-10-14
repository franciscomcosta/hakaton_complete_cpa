import React from "react"
import './footer.css'
import Logo from '../../../assets/ahead-logo.jpeg';
export default function Footer(){
    return (
        <>
        <footer>
        <img src={Logo} id="logo" alt="Ahead Logo"/>
        <p>by Equipe Fucapi</p>
        </footer>
        </>
    )
}