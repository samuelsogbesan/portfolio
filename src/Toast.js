import React from "react";
import "./toast.css"
export default class template extends React.Component{
    constructor(props){
        super(props);
        this.state = {hidden:false};
    }
    componentDidMount(){
        setTimeout(()=>this.setState({hidden:true}),3000);
    }
    render(){
        var className="toast" + (this.state.hidden===true?" hidden":"");
        return(
            <div className={className}>
                {this.props.message}
            </div>    
        )
}
}