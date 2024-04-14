import React from 'react';

const Menu = () => {
  return (
    <div className="menu">
      <h2>
        Oplev ægte mexicansk smag hos vores steakhouse.
        Saftige bøffer, krydret krydderier, autentiske retter.
        Prøv vores tacos, quesadillas og burritos.
        Velkommen til en smagsrejse!
      </h2>
      <a href="/Mexi-menukort-frokost-udkast.pdf" target="_blank" rel="noopener noreferrer">
        <button type="button">Frokostmenu</button>
      </a>
      <a href="/Mexi-menukort-aften-udkast.pdf" target="_blank" rel="noopener noreferrer">
        <button type="button">Aftenmenu</button>
      </a>
    </div>
  );
};

export default Menu;
