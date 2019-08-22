import React from 'react';
import './App.css';
import axios from 'axios';

const login = (data) =>{
  axios.post(`http://localhost:5002/sess/login`, {name:'super'}, { withCredentials: true })
  .then(res => {
    console.log(res.data)
  })
  .catch(err => { // then print response status
      console.log(err)
  })
}

const post = (data) =>{
  axios.post(`http://localhost:5002/sess`, {}, { withCredentials: true })
  .then(res => {
    console.log(res.data)
  })
  .catch(err => { // then print response status
      console.log(err)
  })
}

const get = (data) =>{
  axios.get(`http://localhost:5002/sess`, { withCredentials: true })
  .then(res => {
    console.log(res.data)
  })
  .catch(err => { // then print response status
      console.log(err)
  })
}

const put = (data) =>{
  axios.put(`http://localhost:5002/sess`,{}, { withCredentials: true })
  .then(res => {
    console.log(res.data)
  })
  .catch(err => { // then print response status
      console.log(err)
  })
}

const eliminate = (data) =>{
  axios.delete(`http://localhost:5002/sess`, { withCredentials: true })
  .then(res => {
    console.log(res.data)
  })
  .catch(err => { // then print response status
      console.log(err)
  })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>id:{'aqui'}</h1>
        <button onClick={login}>login</button>
        <button onClick={post}>post</button>
        <button onClick={get}>get</button>
        <button onClick={put}>put</button>
        <button onClick={eliminate}>delete</button>
      </header>
    </div>
  );
}

export default App;
