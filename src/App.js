import logo from './logo.svg';
import './App.css';
import Appbutton from './components/AppButton'
import React from 'react';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Solutions from './components/Solutions';

function App() {
  return (
   <>
   <Navbar/>
   <Herosection/>
   <Solutions/>
   </>
  );
}

export default App;
