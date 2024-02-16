import React from 'react';
import logo from '../../Graph/logo_web&wave.png';
import './contact.css';

const Contact = () => {
 
  return (
    <div className="Contact" id="Contact">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
        <img src={logo} alt="" />

      <iframe title="Formulaire de contact" style={{width:'100%'}} src="https://docs.google.com/forms/d/e/1FAIpQLSfMYZSl7ypqryDdrMYf09Ny-ZZd5V_PgpCEWxoIvZJTVDL_eg/viewform?embedded=true" width="640" height="959" frameborder="0" marginheight="0" marginwidth="0">Chargement…</iframe>
    </div>
    </div>
  );
};

export default Contact;
