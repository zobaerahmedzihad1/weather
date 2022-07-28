import axios, { Axios } from "axios";
import React, { useState } from "react";
import "./Weather.css";

const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f0e6cfc9ad3d1738cbe9476f6b35e1d4`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f0e6cfc9ad3d1738cbe9476f6b35e1d4&units=metric`;

  const { name, main, wind } = data;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('')
    }
  };
  console.log(data, "dta");

  return (
    <div className="weather__container">
      <div className="search">
        <input
          value={location}
          placeholder="Enter Location"
          autoComplete="off"
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name ? name : "City Name"}</p>
          </div>
          <div className="temp">
            <h1>{data.main ? data.main?.temp : "00"} °C</h1>
          </div>
          <div className="description">
            <p>{data.weather ? data?.weather[0]?.main : "weather"}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold"> {data.main ? main?.feels_like : "00"} °C</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">{data.main ? main?.humidity : "00"} %</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold"> {data.wind ? wind?.speed : "00"} MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
