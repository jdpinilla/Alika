import React from 'react';
import logo from '../components/images/logo_alika.png';
import './styles/About.css';
const About = () => {
  return (
    <div className="About">
      <div className="About_Image">
        <img src={logo} alt="LogoAlika" />
      </div>
      <div className="About_Images_Promise"></div>
      <section className="About_History">
        <p>
          En la búsqueda de un propósito de vida más saludable y natural en el
          año 2015 nace Alika Handmade Soaps. El viaje de vacaciones a Chile me
          llevo a conocer los jabones artesanales, sus texturas, aromas, diseño
          pero sobre todo los beneficios para la piel me llamaron la atención
          inmediatamente y me enamore de su proceso de elaboración artesanal.
          Motivada por las afectaciones de la piel de mi hijo mayor, y sin
          conocer donde podía conseguirlos vi una oportunidad de emprender mi
          propio negocio, entonces me capacite, explore, y ensaye cantidad de
          veces (y aún lo sigo haciendo) para aprender e innovar sobre este
          bello arte jabonoso, lo cual nos ha llevado a desarrollar una amplia
          línea de productos naturales.
        </p>
      </section>
    </div>
  );
};

export default About;
