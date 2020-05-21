import React from "react";
export default class Home extends React.Component{    
    componentDidMount(){
        this.props.setAnimate(false);
    }
    render(){
        return(
        <div style={{display:"none"}}>
        </div>
        )
    }
}
