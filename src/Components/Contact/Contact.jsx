import React, { useState } from 'react';
import logo from '../../Graph/logo_web&wave.png';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    interessePar: [],
    concerne: [],
    autresInformations: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e, category) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [category]: checked
        ? [...prevData[category], value]
        : prevData[category].filter((item) => item !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
console.log(formData)
    // Envoyer les données au backend
    fetch('http://votre-serveur.com/api/envoyer-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Réponse du serveur:', data);
        // Gérer la réponse du serveur, peut-être afficher un message à l'utilisateur, etc.
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi de la requête:', error);
        // Gérer les erreurs, afficher un message d'erreur à l'utilisateur, etc.
      });
  };

  return (
    <div className="Contact" id="Contact">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
        <img src={logo} alt="" />

      <iframe style={{width:'100%'}} src="https://docs.google.com/forms/d/e/1FAIpQLSfMYZSl7ypqryDdrMYf09Ny-ZZd5V_PgpCEWxoIvZJTVDL_eg/viewform?embedded=true" width="640" height="959" frameborder="0" marginheight="0" marginwidth="0">Chargement…</iframe>
    </div>
    </div>
  );
};

export default Contact;
