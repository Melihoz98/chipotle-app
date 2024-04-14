import React from 'react';
import './Contact.css'; // Importer CSS-filen til styling

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Kontakt os</h2>
        <p>Adresse: Street 123, City</p>
        <p>Telefon: 12345678</p>
        <p>Email: info@example.com</p>
      </div>
      <div className="opening-hours">
        <h2>Åbningstider</h2>
        <ul>
          <li>Mandag: 9:00 - 18:00</li>
          <li>Tirsdag: 9:00 - 18:00</li>
          <li>Onsdag: 9:00 - 18:00</li>
          <li>Torsdag: 9:00 - 18:00</li>
          <li>Fredag: 9:00 - 20:00</li>
          <li>Lørdag: 10:00 - 20:00</li>
          <li>Søndag: Lukket</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
