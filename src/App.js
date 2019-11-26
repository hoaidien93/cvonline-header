import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Component/Header';
import Footer from './Component/Footer';
import Modal from './Component/Modal'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Modal></Modal>
      <Footer></Footer>
    </div>
  );
}

export default App;
