import React from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Series from './components/series/Series';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Series />
      <Footer/>
    </div>
  );
}

export default App;
