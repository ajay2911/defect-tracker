import React, {Component} from 'react';
import Login from './Login.js'
import LandingPage from './LandingPage.js'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class HomePage extends Component {

    constructor(props){
        super(props);
        this.state={
            username:''
        };
    }

    render(){

        return(
            <div>
                <Router>
                    <div>
                    <Link to= "/login">Login</Link>
                    <Route path='/login' component={Login}/>
                    <Route path='/landingpage' component={LandingPage}/>
                    </div>
                </Router>
            </div>
        );
    }

}