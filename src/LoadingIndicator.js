import React from "react";
import "./loadingindicator.css"

export default class LoadingIndicator extends React.Component{
    constructor(props){
        super(props);
        this.updateCount = this.updateCount.bind(this);
        this.state={count:0,interval:setInterval(this.updateCount,1000)}
        
    }
    updateCount(){
        this.setState({count:this.state.count < 2?this.state.count+1:0})
        
        console.log("count:"+this.state.count);
    }
    
    componentWillUnmount(){
        clearInterval(this.state.interval);
        this.setState({interval:null});
    }
    render(){
        var dots = ".".repeat(this.state.count);
        
        return(
            <div className="loading-indicator">Loading{dots}</div>
        )
}
}