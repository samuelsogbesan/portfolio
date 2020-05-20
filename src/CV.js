import React from "react";
import "./cv.css"
import "./base.css"
import Toast from "./Toast";
import file from "./Resources/cv.pdf";

export default class CV extends React.Component {
    componentDidMount() {
        document.getElementById("cv-download").click();
    }
    render() {
        return (
            <div>
                <Toast message={"Opened CV in new window!"} />
                <a style={{position:"absolute",display:"none"}}target="blank_" id="cv-download" href={file} />
            </div>
        )
    }
}