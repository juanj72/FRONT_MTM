import React from 'react';
import './Card.scss';

const Card = () => {
  return (
    <div className="home-container">
      <p className="home-title">HOGAR DE PASO VICTORIA</p>
      <div className="content-container">
        <div className="info-card">
          <p className="info-title">Alojamiento</p>
          <div className="info-details">
            <p>Contamos con nuestras sedes excelente ubicación en el sector de la ciudad, habitaciones</p>
            <p>en acomodación múltiple con ventilación y televisión e internet.</p>
          </div>
        </div>
        <div className="info-card">
          <p className="info-title">Alimentación</p>
          <div className="info-details">
            <p>Contamos con una alimentación guía por nutricionistas que realizan la dieta dependiendo el requrimiento del diagnóstico del paciente.</p>
          </div>
        </div>
        <div className="info-card">
          <p className="info-title">Recreación</p>
          <div className="info-details">
            <p>Se realizan actividades lúdicas para fortalecer emocionalmente y físicamente al paciente</p>
          </div>
        </div>
        <div className="info-card">
          <p className="info-title">Enfermería</p>
          <div className="info-details">
            <p>Contamos con un auxiliar de efermería las 24 horas en donde se realizara periódicamente la supervión por un médico general o pediatra si lo requiere.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
