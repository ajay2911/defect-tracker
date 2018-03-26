import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

        <HomePage/>

        <Footer/>
      </div>
    );
  }
}

export default App;
