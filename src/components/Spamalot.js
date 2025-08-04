import Spam from "./Spam";
import React, { Component } from 'react';


const Spamalot =()=>{
    let spamArr =[];
    for(let i=0;i<500;i++){
        spamArr.push(<Spam/>);
    }

    return spamArr;
}

export default Spamalot

