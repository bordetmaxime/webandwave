import { Link } from 'react-router-dom';
import logo from '../../Graph/logo_web&wave.png'
import './Offer.css';

const Offer = () => {


  return (
    <div className="Offer">

<Link to="/oneshot" className='box' id='secondBox'>
<div style={{height:'35%', display:' flex', flexDirection:'column', alignItems:'center'}}>
        <img style={{width:'80%'}} src={logo} alt="" />
        <h2 style={{ color:'black', textAlign:'center', marginTop: '-15px'}}>
                One shot 🤠
            </h2>
</div>
            <div style={{height:'65%', display:' flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
            <ul style={{marginTop:'25px'}}>
                <li>Création d'un logo</li> 
                <li>Création de contenu pour les réseaux sociaux</li> 
                <li>Analyse des données et proposition d'axe d'amélioration</li> 
                <li>Ajout/Modification/suppression d'élement sur un site internet</li>
            </ul>
            <div style={{display:'flex', flexDirection:'column'}}>
            <Link to='/oneshot'>En savoir plus..</Link>
            <span style={{textAlign:'center',fontSize:'1.3em', margin:'0',marginBottom:"15px", width:'100%', color: '#e1aa3b', border: '2px solid #EBD9B4', borderRadius:'15px', padding:"8px 10px"}}>40€/h</span>
            </div>
            </div>
            </Link>

        <Link to="/starterpack"  className='box' id='firstBox'>
        <div style={{height:'35%', display:' flex', flexDirection:'column', alignItems:'center'}}>
            <img style={{width:'80%'}} src={logo} alt="" />
              <h2 style={{color:'black', textAlign:'center', marginTop: '-15px'}}>
                Starter pack 😎
            </h2>
            </div>
            <div style={{height:'65%', display:' flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
                 <ul style={{marginTop:'25px'}}>
                <li>Création d'un logo</li>
                <li>Création des réseaux sociaux</li>
                <li>Création d'un site internet</li>
                <li>Sécurisation des environnements</li>
                <li>Accompagnement et maintenance</li>
            </ul>
            <div style={{display:'flex', flexDirection:'column'}}>
            <Link to='/starterpack'>En savoir plus..</Link>
            <span style={{textAlign:'center', fontSize:'1.3em', margin:'0',marginBottom:"15px", width:'100%', color: '#e1aa3b', border: '2px solid #EBD9B4', borderRadius:'15px', padding:"8px 10px"}}>2000€</span>
       </div>
       </div>
        </Link>

     

        <Link to="/specifique" className='box' id='thirdlyBox'>
        <div style={{height:'35%', display:' flex', flexDirection:'column', alignItems:'center'}}>
        <img style={{width:'80%'}} src={logo} alt="" />
        <h2 style={{color:'black', textAlign:'center', marginTop: '-20px'}}>
                Demande spécifique 💣
            </h2>
            </div>
            <div style={{height:'65%', display:' flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
            <ul style={{marginTop:'25px'}}>
                <li>Création d'une application web et mobile</li> 
                <li>Création de logiciel</li> 
                <li>Création d'ecommerce</li> 
            </ul>
            <div style={{display:'flex', flexDirection:'column'}}>
            <Link to='/specifique'>En savoir plus..</Link>
            <span style={{textAlign:'center',fontSize:'1.3em', margin:'0', marginBottom:"15px", width:'100%', color: '#e1aa3b', border: '2px solid #EBD9B4', borderRadius:'15px', padding:"8px 10px"}}>Sur Devis</span>
        </div>
        </div>
        </Link>
        
      </div>
  );
};

export default Offer;