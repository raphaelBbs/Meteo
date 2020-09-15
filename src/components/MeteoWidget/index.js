import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import axios from 'axios';

const EXTERNALAPI = 'https://api.openweathermap.org/data/2.5/weather?';
const APIKEY = '1ff381cee72c6b871b498a4469e57813';

const WidgetMeteo = ({ city, code }) => {
  const [temperature, setTemperature] = useState(5);
  const url = `${EXTERNALAPI}q=${city},fr&units=metric&appid=${APIKEY}`;

  useEffect(() => {
    axios({
      url,
    })
      .then((res) => {
        console.log(res.data);
        setTemperature(res.data.main.temp);
      })
      .catch((err) => {
        console.error(err);
      })
  }, [url]);

  const getTemperatureHue = (percent) => {
    let min = 0;
    let max = 230;
    // produit en croix / attention au 'max -', sans ça on aurait bleu = chaud et rouge = froid 
    return max - (percent * (max - min) / 100);
  };
  const getTemperaturePercentage = (temperature) => {
    let limitedTemperature = temperature;
    const min = -20;
    const max = 50;
    // Ici je borne à -20 au minimum
    limitedTemperature = Math.max(min, temperature);
    // Ici je borne à +50 au maximum
    limitedTemperature = Math.min(max, temperature);
    // Je peux faire un produit en croix pour déterminer
    // le pourcentage
    limitedTemperature = limitedTemperature - min;
    const result = limitedTemperature * 100 / (max - min);
    // Je feux trouver une valeur en % pour la temperature
    // que j'ai reçue.
    console.log(limitedTemperature);
    console.log(result);
    return result;
  };
  const percent = getTemperaturePercentage(temperature);
  const hue = getTemperatureHue(percent);

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
            backgroundColor: `hsl(${hue}, 90%, 40%)`
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