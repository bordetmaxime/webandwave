import React from 'react';
import { Link } from 'react-router-dom';

import './Specifique.css';

const Specifique = () => {


  return (
    <div className="Specifique" id='Specifique'>
      <Link to="/contact" className='box' id='secondBox'>
        <h1 style={{fontSize:'2em',  color:'black', textAlign:'center'}}>
                Demande spécifique 💣
            </h1>
            <ul style={{color:'black', fontSize:'1.2em'}}>
                <li>Web&Wave vous propose 3 Logo, en harmonie avec votre charte graphique, un logo qui vous représente et qui a du sens.</li> 
                <li>Nous créons vos réseaux sociaux (TikTok, Instagram, Facebook..) suivi d'un accompagnement afin de vous laisser par la suite en autonomie </li> 
                <li>Nous vous créons un site internet clé en main, avec une expérience utilisateur étudié afin de simplifier la naviguation de vos clients.</li> 
                <li>Nous vous conseillons sur les bonnes pratiques pour sécurisé votre entreprise sur le web, ainsi que la mise en place d'outils permettant de sécurisé vos accès, moyens de paiements..</li>
                          </ul>
                          <Link style={{textAlign:'center'}} to='/contact'>Demander un devis</Link>
          
        </Link>
    </div>
  );
};

export default Specifique;