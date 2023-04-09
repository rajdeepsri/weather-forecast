import React from "react";
import weatherData from "../../todaysweather";
import SearchInput from "../components/SearchInput";

const TodaysWeather = () => {
  const temp = weatherData.main.temp;
  const city = weatherData.name;
  const country = weatherData.sys.country;
  const feels_like = weatherData.main.feels_like;
  const sunset = weatherData.sys.sunset;
  const sunrise = weatherData.sys.sunrise;
  const today = new Date(weatherData.dt);

  return (
    <div className="todays_weather">
      <div className="mainWeather">
        <div className="todaysDate">
          <h3 className="heading">Today</h3>
          <p className="date">{today.toDateString().substr(0, 10)}</p>
        </div>
        <span className="temp">
          <h1>{temp}</h1>
          <h3>&deg; C</h3>
        </span>
        <div className="location">
          <p className="city">{city},</p>
          <p className="country">{country}</p>
        </div>
        <div className="addInfo">
          <p className="feelsLike">Feels like {feels_like}</p>
          <p className="sunset">Sunset {sunset}</p>
        </div>
      </div>
      <div className="farmerInputForm">
        <SearchInput submitButton={true} />
      </div>
    </div>
  );
};

export default TodaysWeather;
