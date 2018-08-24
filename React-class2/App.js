import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      words:"hello world",
      cond:true
    }
  }

  update() {
    console.log("test");
    this.setState({
      words:this.state.cond?"Pakistan":"hello world",
      cond:!this.state.cond
    })
  }
 
  

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
         <h3>{this.state.words}</h3>
          <button onClick={this.update}>click me</button>
          <br/>
          <button onClick={()=>this.update()}>click me (with fun this)</button><br/>
          <button onClick={this.update.bind(this)}>click me (with bind this)</button><br/>
        </p>
      </div>
    );
  }
}

export default App;
