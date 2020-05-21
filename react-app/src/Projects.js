import React from "react";
import "./projects.css";
import  { Control } from "./ProjectView";
import "./base.css";
import BaseComponent from "./BaseComponent";
//import $ from "jquery";
//import rotate from "./Resources/Images/rotate.svg";
import github from "./Resources/Images/social-network-icons/svg/github.svg";
//import api from "../../backend/api"
import LoadingIndicator from "./LoadingIndicator";
import fetch from "node-fetch";
//var express = require("express");
//var jq = require("jquery");
//var fetch = require("node-fetch");
//var router = express.Router()
class GridElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inFocus: false }
    }
    render() {
        var className = "grid-element " + this.props.type
        var animationDelay = 500 * this.props.index * 4
        var text;
        if (this.state.inFocus === false) {
            text = <div className="info-container"><div className="name">{this.props.name}</div></div>
        } else {
            text = <div className="info-container">
                <div className="name">{this.props.name}</div>
                <div className="description">{this.props.description}</div>
                <a href={this.props.url} >
                <img
                    src={github}
                    className="giticon"
                    alt="Visit GitHub"
                />
                </a>

            </div>
        }
        return (
            <div className="grid-element-container">
                <div
                    className={className}
                    style={{
                        animation: "fadein Xms ease".replace("X", animationDelay),
                        backgroundImage: "url(X)".replace("X", ''),
                        backgroundColor: this.props.colour                        
                    }}
                    onClick={() => this.props.onClick.call(this, this.props.index)}
                    onMouseEnter={() => this.setState({ inFocus: true })}
                    onMouseLeave={() => this.setState({ inFocus: false })}
                >
                    {text}
                </div>
            </div>
        )
    }
}

/**
 * Returns an array of unforked project objects
 * @param {*} json An array of projects
 */
const reduce = (json) => json.filter((value)=>value.fork!==true).map((value)=> { 
    var {name,description,url,created_at}=value;
    var object = {name,description};
    object.link = url;
    object.startDate = created_at;
    return object;
});

export default class Projects extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            activeProjectIndex: -1,
            projects: [],
            ready: false
        }
        this.setProject = this.setProject.bind(this);
        this.scroll = this.scroll.bind(this);
        //this.props.setAnimate(true);
    }

    rand(arr){
        return Math.round(Math.random() * (arr.length - 1))
    }

    componentDidMount() {
        fetch("https://api.github.com/users/samuelsogbesan/repos")
        .then(function(response){return response.json()})
        .then(function(json){return reduce(json)})
        .then(json=>{
            //set the colours dynamically..
            var colours = ["#b143e0","#441151","#613dc1","#6247aa","#858ae3","95f9e3","#69ebd0","#49d49d","#558564"];
            for (var i = 0; i < json.length; i++) json[i].colour = colours.splice(this.rand, 1)[0]
            this.setState({projects:json})            
        })
        .then(() =>
            setTimeout(() => {                
                this.setState({ ready: true });
                document.getElementById("grid-container").scrollTo(0,0); //reset scroll on grid-container
                this.props.setAnimate(false);
            }, 450))        
        .catch(function(res){console.log(res)})
    }

    setProject(index) {
        this.setState({ activeProjectIndex: index })
    }

    scroll(dir){
        var el = document.getElementById("grid-container");
        var scrollDist = document.querySelector(".grid-container").clientWidth;
        el.scrollBy(dir * scrollDist,0);
    }
    render() {
        if (this.state.ready !== true) return <LoadingIndicator />;
        var projects = [];

        for (var i = 0; i < this.state.projects.length; i++) projects.push(<GridElement {...this.state.projects[i]} key={i} index={i} onClick={this.setProject} />)
        return (
            <div style={{ animation: "fadein 500ms ease", flex: "0.7", display: "flex", alignItems: "center",justifyContent:"center" }}>
                <Control icon="<" onClick={this.scroll.bind(this,-1)} />
                <div className="grid-container" id="grid-container">
                    {projects}           
                </div>
                <Control icon=">" onClick={this.scroll.bind(this,1)} />
            </div>

        )
    }
}

//<ProjectView setProject={this.setProject} index={this.state.activeProjectIndex} project={proj} />
/*
var projects = [
    {
        name: "Permutation Visualiser",
        image: { src: "", alt: "Image." },
        startDate: new Date(),
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
        tech: null,
        link: "https://www.google.com"
    },
    {
        name: "Project-2",
        image: { src: "", alt: "Image." },
        startDate: new Date(),
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
        tech: null,
        link: "https://www.google.com"
    },
    {
        name: "Project-3",
        image: { src: "", alt: "Image." },
        startDate: new Date(),
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
        tech: null,
        link: "https://www.google.com"
    }
]
*/

        /*
        //Make call to my API
        $.ajax({
            url: "/api/gitprojects",
            type: "GET",
            success: function (res) {
                var data;
                $.when(data = res).then(function setColours() {
                    var colours = ["#61E8E1", "#F25757", "#F2E863", "#F2CD60", "#FFEEDB"];
                    //colours = [];
                    colours = ["#b143e0","#441151","#613dc1","#6247aa","#858ae3","95f9e3","#69ebd0","#49d49d","#558564"];
                    for (var i = 0; i < data.length; i++) data[i].colour = colours.splice(Math.round(Math.random() * (colours.length - 1)), 1)[0]
                })

                this.setState({ projects: data });
            }.bind(this),
            error: function (xhr, testStatus, errorThrown) {
                console.log("no projects were found")
            }})*/