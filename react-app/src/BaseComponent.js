import React from "react";

export default class BaseComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ready:false
        }
        this.props.setAnimate(true);
    }
    componentDidMount(){
        setTimeout(()=>{
            this.props.setAnimate(false);
            this.setState({ready:true})            
        },450);
    }    
    //Need to override
    render(){
        return(
            <div>test</div>
        )
}
}