import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Main />
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
