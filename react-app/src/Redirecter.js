import React, { Component } from "react";
import "./redirecter.css";
import Toast from "./Toast";
/**
 * Takes a bunch of functions (steps) and executes them all in series
 * Primary use: Clear up cookies & other user data before routing to another page
 */
export default class Redirecter extends Component {
    constructor(props){
        super(props);
        this.state = {message:"",isFinished:false}
    }
    componentDidMount(){
        var steps = this.props.steps;
        var i = 0;
        var interval = setInterval(function(){                    
            this.setState({message:steps[i].message})
            steps[i].action()        
            i++;
            if(i >= steps.length) clearInterval(interval)
        }.bind(this),this.props.interval)
        this.setState({isFinished:true})

    }
    render(){
        var className = "redirecter" + (this.state.isFinished===true?" complete":"");
    
        return(
            <span className={className}>
                <Toast message={this.state.message}/>
            </span>
        )
    }
    
}
