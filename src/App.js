import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Step1 from './components/Step1/Step1';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <Main /> */}
        <Step1 />
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
