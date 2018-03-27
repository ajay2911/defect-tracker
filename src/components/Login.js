import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import DataStore from './DataStore.js';
import * as ActionList from './ActionList.js';
export default class Login extends React.Component {

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            users: ''
        };

        this.handleAuthentication=this.handleAuthentication.bind(this);
        this.onChange=this.onChange.bind(this);
        this.getUserData = this.getUserData.bind(this);
    }

    onChange(event){
        this.setState({
            [event.target.id]:[event.target.value]
        });
    }

    getUserData(){
        console.log("Here: "+DataStore.getUserData());
        this.setState({
            users: "str"
        });
        this.state.users = DataStore.getUserData();

    }

    componentDidMount(){
    }

    componentWillMount(){
        DataStore.on("change", this.getUserData);
    }

    componentWillUnmount() {
        DataStore.removeListener("change", this.getUserData);
      }

    handleAuthentication(event){
        event.preventDefault();
        ActionList.getUserData();      
        // this.props.history.push('/landingpage');
        console.log("Username: "+this.state.users);
    }

    render(){

        return(
            <div>
                <form onSubmit={this.handleAuthentication}>
                    <input type="text" onChange={this.onChange} value={this.state.username} placeholder="Enter Username" id="username"/>
                    <input type="password" onChange={this.onChange} value={this.state.password} placeholder="Enter Password" id="password"/>
                    <input type="submit" text="Login" />
                </form>
            </div>
        );
    }

}