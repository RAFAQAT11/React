import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SweetAlert from 'sweetalert2-react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      show:true,
      add:false,
      edit: {},
      email: "",
      pass: "",
      auth: false,
      infor: [
        {
          firstName: "Imran",
          lastName: "Jnab",
          email: "imranjnab@domain.com",
          salary: "Rs20M",
          date: "9-2-11",
          isShow: true
        }
      ]
    };
  }

  email = e => {
    this.setState({ email: e.target.value });
  };
  pass = e => {
    if (this.state.email === "admin" && e.target.value === "pass") {
      this.setState({ pass: e.target.value });
      this.setState({ auth: true });
      
      console.log(this.state);
    } else this.setState({ auth: false });
  };
  delete = index => {
    console.log("delete", index);
    const { infor } = this.state;
    // const arr1 = infor.slice(0,index);
    // const arr2 = infor.slice(index+1);
    // console.log('arr1',arr1)
    // console.log('arr2',arr2)
    delete infor[index];
    console.log("infor", infor);
    this.setState({ infor });
    
  };





  edit = index => {
    const {add}=this.state;
    this.setState({add:true})
    setTimeout(() => {
    const { infor, edit } = this.state;
    document.getElementById("fn").value = infor[index].firstName;
    document.getElementById("ln").value = infor[index].lastName;
    document.getElementById("em").value = infor[index].email;
    document.getElementById("sal").value = infor[index].salary;
    document.getElementById("dte").value = infor[index].date;
    edit.yes = true;
    edit.index = index;
    this.setState({ edit });
      
    }, 500);
  };

  HeaderRender() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    );
  }
  authen() {
    return (
      <div className="admin-div">
        <input
          type="text"
          onChange={this.email}
          name=""
          placeholder="type email address .."
          id=""
        />
        <input
          type="text"
          onChange={this.pass}
          name=""
          placeholder="type password ... "
          id=""
        />
      </div>
    );
  }

  insert() {
    let length = 0;
    const { infor, edit } = this.state;
    if (edit.yes) length = edit.index;
    else length = infor.length;
    console.log(length);

    return (
      <div className="insert">
        <input type="text" id="fn" placeholder=" first name ..." />
        <input type="text" id="ln" placeholder=" last name ..." />
        <input type="text" id="em" placeholder=" email ..." />
        <input type="text" id="sal" placeholder=" salary ..." />
        <input type="text" id="dte" placeholder=" date ..." />
        {!edit.yes ? (
          <button onClick={this.add.bind(this, length)}>Add</button>
        ) : (
          <button onClick={this.add.bind(this, length)}>Okay</button>
        )}
      </div>
    );
  }
  add = index => {
    console.log("index", index);
    const fn = document.getElementById("fn").value;
    const ln = document.getElementById("ln").value;
    const em = document.getElementById("em").value;
    const sal = document.getElementById("sal").value;
    const dte = document.getElementById("dte").value;
    const { infor, edit } = this.state;
    infor[index] = {
      firstName: fn,
      lastName: ln,
      email: em,
      salary: sal,
      date: dte,
      isShow: true
    };
    edit.yes = false;
    edit.index = 0;
    this.setState({ infor, edit });
  };
  table() {
    const { infor } = this.state;
    return (
      <div className="table">
        <ul>
          {infor.map((item, index) => {
            return (
              <li key={index}>
                {item.isShow && (
                  <p>
                    {item.firstName} | {item.lastName} | {item.email} |{" "}
                    {item.salary} | {item.date}
                  </p>
                )}
                <button onClick={this.edit.bind(this, index)}>Edit</button>
                <button onClick={this.delete.bind(this, index)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  changeState=(e)=>{
    const {add}=this.state;
    this.setState({add:!add})
    e.preventDefault();
  }
  floating(){
    
    return(
      <a href="" onClick={this.changeState} className="float">
          <i className="fas fa-plus my-float"></i>
      </a>
    )
  }
  sweet(){
    return (
      <div>
        <SweetAlert
          show={this.state.show}
          title="Welcome to React!"
          text="you can edit, insert and delete lis."
          onConfirm={() => this.setState({ show: false })}
        />
      </div>
    );
  }

  render() {
    const { auth , add} = this.state;
    return (
      <div className="App">
        {this.HeaderRender()}
        {this.authen()}
        {auth && this.sweet()}
        {add && auth && this.insert()}
        {auth && this.table()}
        {console.log(this.state)}
        {this.floating()}
      </div>
    );
  }
}

export default App;
