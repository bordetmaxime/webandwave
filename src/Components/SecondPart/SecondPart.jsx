import './secondPart.css';
import { Link } from 'react-router-dom';
// import image from '../../Graph/firstIe.jpg'
const SecondPart = () => {

    
  return (
    <div className="secondPartContainer" >
        <style>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Saira:wght@100&display=swap');
</style>
<div className="left-block">
  <div className="leftImage">
      </div>
      </div>   
      <div className="right-block">
      <h2 style={{fontFamily:"'Saira', sans-serif", textAlign:'center', color:'grey'}}>
        VOTRE AGENCE WEB EXCEPTIONNELLE 🌊
      </h2>
        <div className="description">
          En tant que société française basée dans les Landes, 
          nous sommes fiers de mettre à votre disposition une expertise digitale de premier plan.<br/><br/>
          Forts d'expérience pour des entreprises Française et international,
           nous vous offrons des solutions digitales sur mesure,
            sans coûts imprévus ni délais mal calculés. 
            
            Faites confiance à notre équipe d'expert pour vous fournir une large gamme de solutions,
             conçues pour propulser votre entreprise vers le succès numérique.         
        </div>   
            <Link to="/offer" className="buttonAction2" >Découvrir Nos offres</Link>    
      </div>
 
    </div>
  );
};

export default SecondPart;