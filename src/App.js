import logo from './logo.svg';
import './App.css';
import Appbutton from './components/AppButton'
import React from 'react';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Solutions from './components/Solutions';
import Action from './components/Action';
import System from './components/System';
import Tools from './components/Tools';
import Footer from './components/Footer';

function App() {
  return (
   <>
   
   <Navbar/>
   <Herosection/>
   <Solutions/>
   <Action/>
   <System/>
   <Tools/>
   <Footer/>
   
  
   </>
  );
}

export default App;
