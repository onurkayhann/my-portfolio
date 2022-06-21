import React from 'react';
import './contactMe.css';
import { navigationLinks } from '../../helpers/navigationLinks';

function createLinks() {
  return navigationLinks.map((e, idx) => (
    <p key={idx}><a href={e.ref}>{e.name}</a></p>
  ));
}

function ContactMe() {
  return (
    <div className="contactMe__container" id="contact">
      <div className="contactMe__data__links">
        <div>
        <p>Stockholm, Sweden</p>
        <p>Onur Kayhan</p>
        <p>onur.kayhan@chasacademy.se</p>
        </div>
          <div>
          {createLinks()}
          </div>
      </div>
      <div style={{ textAlign: 'center' }}>Copyright&copy; {new Date().getFullYear()} All rights reserved</div>
    </div>
  )
}

export default ContactMe;