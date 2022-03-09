import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import User from './Components/User';
//Es localholst:3000/home =>Home
//localholst:3000/user => crear usuario
//localholst:3000/login => usuario

function App() {
  return (
    <div className="App">
     <Navbar/>
      <Routes>
       <Route path="/home" element={<Home/>} /> 
       <Route path="/login" element={<Login/>} />
       <Route path="/user" element={<User/>}/> 
      </Routes>
    </div>
  );
}

export default App;
