import React from 'react';
import { Link } from 'react-router-dom';

import './Oneshot.css';

const Oneshot = () => {


  return (
   <div className="Oneshot" id='Oneshot'>
      <Link to="/contact" className='box' id='secondBox'>
        <h1 style={{fontSize:'2em',  color:'black', textAlign:'center'}}>
                One shot 🤠
            </h1>
            <ul style={{color:'black', fontSize:'1.2em'}}>
                <li>Web&wave vous créer votre Logo, en harmonie avec votre charte graphique, un logo qui vous représente et qui a du sens.</li> 
                <li>Animation de vos différents réseaux sociaux avec la création de contenu, et nous étudions vos réseaux afin de les faires évoluers</li> 
                <li>Mise en place de solutions pour obtenir le meilleur réferencement</li>
                <li>Création d'un site internet clé en main, avec une expérience utilisateur étudié afin de simplifier la naviguation de vos clients.</li> 
                <li>Ajout d'élement sur votre site internet (création d'un backoffice, d'une page, d'une section...)</li> 
                          </ul>
            <Link style={{textAlign:'center'}} to='/contact'>Nous contacter</Link>
            </Link>
            
    </div>
  );
};

export default Oneshot;