import React from "react";
import Toast from "./Toast";
export default function Email(props){
    navigator.clipboard.writeText("ss3222@bath.ac.uk");
    return <Toast message={"copied email to clipboard!"}/>
}