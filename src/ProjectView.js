import React from "react";
import "./projectview.css";
import github from "./Resources/Images/social-network-icons/svg/github.svg";
import temp from "./Resources/Images/profile-image.gif";

class ImageView extends React.Component {
    render() {
        var i = this.props.image
        return (
            <img
                src={i.src}
                alt={i.alt}
                className="project-image"
            />
        )
    }
}

class InfoView extends React.Component {
    render() {
        var p = this.props.project; //shorthand
        console.log(p);
        return (
            <div className="project-info">
                <span className="name">{p.name}</span>
                
                <p className="description">{p.description}</p>
                <a className="link" target="_blank" rel="noopener noreferrer" href={p.link}><img src={github} alt="View Repository Here"></img></a>
            </div>
        )
    }
}

export const Control = (props) => <input type="button" className="controller" value={props.icon} onMouseUp={props.onClick} disabled={props.isDisabled}/>

export default class ProjectView extends React.Component {
    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
        this.state = { activeIndex: 0, projects: [
            {
                name: "Permutation Visualiser",
                image: { src: temp, alt: "Image." },
                startDate: new Date(),
                description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
                tech: null,
                link: "https://www.google.com"
            },
            {
                name: "Another Project",
                image: { src: temp, alt: "Image." },
                startDate: new Date(),
                description: "But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted",
                tech: null,
                link: "https://www.google.com"
            }
        ]};
    }

    updateIndex(increment){
        this.setState({activeIndex:this.state.activeIndex+increment});
    }

    close(event){    
        if(event.target.id === "project-container") this.props.setProject(-1)
    }

    render() {
        var activeProject = this.state.projects[this.state.activeIndex];
        activeProject = activeProject !== undefined ? activeProject : null;
        var image = activeProject!== null ? activeProject.image : null;
        
        var activeIndexIsMin = this.state.activeIndex === 0 ? true:false;
        var activeIndexIsMax = this.state.activeIndex === this.state.projects.length-1 ? true : false;

        if(this.props.project===null || this.props.project===undefined){
            return(
                null
            )
        }
        return (
            <div className={"project-container"} id="project-container" onClick={this.close}>
                <Control icon="<" onClick={this.props.setProject.bind(this,this.props.index+1)} isDisabled={activeIndexIsMin}/>
                <ImageView image={image}/>
                <InfoView project={this.props.project}/>
                <Control icon=">" onClick={this.props.setProject.bind(this,this.props.index-1)} isDisabled={activeIndexIsMax}/>
            </div>
        )
    }
}
//<Control icon="<" onClick={this.updateIndex.apply(this,[-1])}/>
//<Control icon=">" onClick={this.updateIndex.apply(this,[1])}/>

export{
    ProjectView
}