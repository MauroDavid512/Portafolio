import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

import { Route, Routes } from 'react-router-dom';


function App() {

  
  return (
    <div className="App">
      <NavBar />
      <div className='bigcontainer'>
      <Routes>
        <Route exact path='/' element={<div><Home/></div>}/>
        <Route path='/about' element={<div><About/></div>}/>
        <Route path='/contact' element={<div><Contact/></div>}/>
        <Route path='/experience' element={<div><Experience/></div>}/>
        <Route path='/portfolio' element={<div><Portfolio/></div>}/>
        <Route path='/Skills' element={<div><Skills/></div>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
