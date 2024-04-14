import React from 'react';
import name from '../TekstNavn-removebg-preview(1).png'; // Import the name image
import logo from '../logomexico-removebg-preview.png'; // Import the logo image
import './HomeStyle.css'; // Import the CSS file
import BookButtons from '../components/BookButtons';

const Home = () => {
  return (
    <div className="home">
       <div className="pillar pillar-left"></div>
      <div className="pillar pillar-right"></div>
      <img src={name} alt="Navn" style={{ width: '600px', height: 'auto', marginRight: '10px' }} /> 
      <img src={logo} alt="Logo" style={{ width: '300px', height: 'auto', marginRight: '10px' }} /> 
 <BookButtons />
      <h2>Velkommen til vores mexicanske steakhouse!<br></br>
        Smag på vores saftige bøffer med en krydret twist. <br></br>
        Oplev ægte mexicansk gastronomi i hjertet af byen!</h2>
      <div className="button-container">
       
      </div>
    </div>
  );
};

export default Home;
