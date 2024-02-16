import React from 'react';
import logo from '../../Graph/logo_web&wave.png'
import { Link } from 'react-router-dom';

import './FirstPart.css';

const FirstPart = () => {


  return (
    <div className="FirstPart" id='firstPart'>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');
</style>
      <div className="ui text container" style={{width:'100%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <img style={{width:'50%'}} src={logo} alt="" />
      <Link to="/about" className="buttonAction" >Découvrir Nos Services</Link>
        </div>
    </div>
  );
};

export default FirstPart;