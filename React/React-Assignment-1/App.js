import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const name ="hellow world";
const obj = {name: "Hello World Object"}
const data = ['We', 'are', 'United'] 
const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}] 
const complex = [{company: 'XYZ', jobs: ['Javascript' ,'React']}, {company: 'ABC', jobs: ['AngularJs', 'Ionic']}]
const web1=[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  }
]
const web2=[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <ol>
           
             <li>{name}</li>
             <li>{obj.name}</li>
           {  
            <li>{data.map((val)=>{
              return(<li>{val}</li>)
             })}</li> 

             
            //  web2.map((data)=>{
            //    return (
            //      <li>
            //           {data.id} <br/>
            //           {data.name} <br/>
            //           {data.username} <br/>
            //           {data.email} <br/>
            //           {data.phone} <br/>
            //           {data.website} <br/> 
            //           {data.address.street} <br/>
            //           {data.address.suite} <br/>
            //           {data.address.city} <br/>
            //           {data.address.zipcode} <br/>
            //           {data.address.geo.lat} <br/>
            //           {data.address.geo.lng} <br/>
            //           {data.company.name} <br/>
            //           {data.company.catchPhrase} <br/>
            //           {data.company.bs} <br/>
            //       </li>
            //    )
            //  })


              // web1.map((data)=>{
              //   return <li>
              //           userID: {data.userId} <br/>
              //           ID: {data.id}<br/>
              //           title: {data.title}<br/>
              //           body: {data.body}<br/> <br/>
              //           </li>
              // })






            // complex.map((value)=>{
            //   return (<li>{value.company}                
            //       <ol>  {
            //           value.jobs.map((jobs)=>{
            //             return <li>{jobs}</li>
            //           })
            //         }</ol>
            //       </li>
            //     )             
            // })
          }  
          </ol>
        </p>
      </div>
    );
  }
}

export default App;
