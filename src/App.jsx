import './App.css';
import { Route, Routes } from 'react-router';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import FirstPart from './Components/FirstPart/FirstPart'
import Contact from './Components/Contact/Contact'
import SecondPart from './Components/SecondPart/SecondPart';
import Specifique from './Components/Specifique/Specifique';
import Starterpack from './Components/Starterpack/Starterpack';
import Oneshot from './Components/Oneshot/Oneshot';
import Offer from './Components/Offer/Offer';

function App() {


  
  return (
    <div className="App" id='app'>
       <Routes>
        <Route path="/" element={<FirstPart/>} />
        <Route path="/about" element={<SecondPart/>} />
        <Route path="/offer" element={<Offer/>} />
        <Route path="/specifique" element={<Specifique/>} />
        <Route path="/oneshot" element={<Oneshot />} />
        <Route path="/starterpack" element={<Starterpack />} />
        <Route path="/contact" element={<Contact/>} />
    </Routes>
     
    </div>
  );
}

export default App;
