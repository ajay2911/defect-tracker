import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default class LandingPage extends React.Component {

    constructor(props){
        super(props);
        this.state={
            username:''
        };
    }

    render(){

        return(
            <div>
                Hello!
            </div>
        );
    }

}