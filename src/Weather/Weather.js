import React from "react";
import "./Weather.css";

const Weather = () => {
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`
  const url = `https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=f0e6cfc9ad3d1738cbe9476f6b35e1d4`;
  return (
    <div className="weather__container">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dhaka</p>
          </div>
          <div className="temp">
            <h1>70 °F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>65 °F</p>
          </div>
          <div className="humidity">20%</div>
          <div className="wind">
            <p>12 MPH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
