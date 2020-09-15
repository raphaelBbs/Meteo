import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
const WidgetMeteo = ({ city, code }) => {
  const temperature = Math.random() * 60 - 20;
  const percent = 50;
  return (
    <article className="meteo">
      <div className="meteo-container">
        <div className="meteo-infos">
          <h3 className="meteo-city">{city}</h3>
          <p className="meteo-code">{code}</p>
        </div>
        <p className="meteo-temperature">
          {Math.round(temperature)}°
        </p>
      </div>
      <div className="meteo-thermometer">
        <div
          className="meteo-thermometer-inside"
          style={{
            width: `${percent}%`,
          }}
        />
      </div>
    </article>
  );
};

WidgetMeteo.propTypes = {
  city: PropTypes.string.isRequired,
  code: PropTypes.number.isRequired,
};

export default WidgetMeteo;