import {Arrow,MenuList} from "./MainMenu";
import React from "react";
import email from "./Resources/Images/email.svg";
import linkedin from "./Resources/Images/social-network-icons/svg/linkedin.svg";
import github from "./Resources/Images/social-network-icons/svg/github.svg";
//import phone from "./Resources/Images/phone.svg";
import "./menu-style.css";
export default class SocialsMenu extends React.Component{
    render(){
        var options = [
            {index:0,alt:"ss3222@bath.ac.uk",src:email,href:"/email"},
            {index:1,alt:"Linkedin",src:linkedin,href:"/linkedin"},
            {index:2,alt:"GitHub",src:github,href:"/github"}
        ]
        return(
            <nav>
                {MenuList({className:"menu-list socials-menu", options:options})}
                <Arrow text="contact" orientation="180deg" lead="arrow"/>
            </nav>
            
        )
}
}