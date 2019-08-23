import React from 'react';
import './App.css';
import axios from 'axios';



import { 
  Footer,
  Button
} from 'react-materialize';

const login = (data) =>{
  axios.post(`http://localhost:5002/redacteur/login`, {name:'super'}, { withCredentials: true })
  .then(res => {
    console.log(res.data)
  })
  .catch(err => { // then print response status
      console.log(err)
  })
}

const post = (data) =>{
  axios.post(`http://localhost:5002/redacteur`, {}, { withCredentials: true })
  .then(res => {
    console.log(res.data)
  })
  .catch(err => { // then print response status
      console.log(err)
  })
}

const get = (data) =>{
  axios.get(`http://localhost:5002/redacteur/`, { withCredentials: true })
  .then(res => {
    console.log(res.data)
  })
  .catch(err => { // then print response status
      console.log(err)
  })
}

const data2 = {
	username:"username",
	password:"password"
}

const put = (data) =>{
  axios.put(`http://localhost:5002/redacteur/login`, data2, { withCredentials: true })
  .then(res => {
    console.log(res.data)
  })
  .catch(err => { // then print response status
      console.log(err)
  })
}

const eliminate = (data) =>{
  axios.delete(`http://localhost:5002/redacteur`, { withCredentials: true })
  .then(res => {
    console.log(res.data)
  })
  .catch(err => { // then print response status
      console.log(err)
  })
}

function App() {
  return (
    <div className="App" style={{backgroundColor:'pink'}}>
      <header className="App-header">
        <h1>id:{'aqui'}</h1>
        <button onClick={login}>login</button>
        <button onClick={post}>post</button>
        <button onClick={get}>get</button>
        <button onClick={put}>put</button>
        <button onClick={eliminate}>delete</button>
      </header>
      <div style={{backgroundColor:'pink'}}>
        <Footer
        copyrights="la vie est belle"
        moreLinks={<a />}
        links={<ul />}
        className="example"
        >
          <h5 className="white-text">
          Footer Content
          </h5>
          <p className="grey-text text-lighten-4">
          You can use rows and columns here to organize your footer content.
          </p>
        </Footer>
      </div>
    </div>
  );
}

export default App;
