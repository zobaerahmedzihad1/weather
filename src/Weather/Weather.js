import { Axios } from "axios";
import React, { useState } from "react";
import "./Weather.css";

const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f0e6cfc9ad3d1738cbe9476f6b35e1d4`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      Axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };

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
            <p className="bold"> 65 °F</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">12 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
