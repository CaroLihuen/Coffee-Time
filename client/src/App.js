import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
//Es localholst:3000/home
function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/home" element={<Home/>} /> 
       {/**<Route path="/" element={<></>} />
       <Route path="/" element={<></>} /> */}
     </Routes>
    </div>
  );
}

export default App;
