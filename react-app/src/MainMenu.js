import React from "react";
import { NavLink } from "react-router-dom";
//import facebook from "./Resources/Images/social-network-icons/svg/facebook.svg";
//import linkedin from "./Resources/Images/social-network-icons/svg/linkedin.svg";
import homeicon from "./Resources/Images/home-icon.svg";
import project from "./Resources/Images/rocket.svg";
import cv from "./Resources/Images/cv.svg";
import "./menu-style.css";

class Brand extends React.Component {
    render() {
        return (
            <div className="brand">
                <span className="brand-title">Samuel Sogbesan</span>
                <p className="brand-subtitle">
                    <span className="s1">Computer Science Student</span> & <span className="s2">Software Engineer</span>
                </p>                
            </div>

        )
    }
}

/*
class MenuItem extends React.Component {
    render() {
        return (
            <li><NavLink exact className="menu-item" activeClassName="active" to={this.props.href}>{this.props.name}</NavLink></li>
        )
    }
}
*/

class MenuItemImage extends React.Component {
    render() {
        var animationDelay = 500 * this.props.index * 4
        return (
            <li style={{animation: "fadein Xms ease".replace("X", animationDelay)}}>
                <NavLink exact className="menu-item" activeClassName="active" to={this.props.href}>
                    <img src={this.props.src} className="image" alt={this.props.alt} />
                    <span className="title">{this.props.alt}</span>
                </NavLink>
            </li>
        )}
}



const MenuList = (props) => <ul className={props.className}> {props.options.map((option)=><MenuItemImage key={option.index} {...option}/>)}</ul>

export default class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state={inFocus:false}
        this.animate = this.animate.bind(this);
    }

    animate(){
        this.setState({inFocus:true})
        //setTimeout(()=>this.setState({inFocus:false}),1);
    }
    render() {
        var className = "menu" + (this.props.animate===true?" sliding":"");
        var options = [
            {index:0,alt:"Home",src:homeicon,href:"/"},
            {index:1,alt:"Projects",src:project,href:"/projects"},
            {index:2,alt:"CV",src:cv,href:"/cv"}
        ]
        return (
            <nav className={className}>
                <Brand />
                {MenuList({className:"menu-list",options:options})}
            </nav>
        )
    }
}

export{
    Menu,
    MenuList
}