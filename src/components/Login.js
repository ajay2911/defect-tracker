import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default class Login extends React.Component {

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        };

        this.handleAuthentication=this.handleAuthentication.bind(this);
        this.onChange=this.onChange.bind(this);
    }

    onChange(event){
        this.setState({
            [event.target.id]:[event.target.value]
        });
    }

    handleAuthentication(event){
        event.preventDefault();
        console.log(this.state.username+" - "+this.state.password);
        this.props.history.push('/landingpage');
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