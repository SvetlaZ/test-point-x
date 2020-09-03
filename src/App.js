import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Step1 from './components/Step1/Step1';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={Main} />
        <Route path='/create' component={Step1} />
      </BrowserRouter>
    </div>
  );
}

export default App;
