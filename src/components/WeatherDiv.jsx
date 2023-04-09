import React from "react";
import SearchInput from "./SearchInput";
import TimePeriod from "./TimePeriod";
import cityData from "../../cities.json";
import CityCard from "./CityCard";

const WeatherDiv = () => {
  const colors = ["#ED2B2A", "#FF6000", "#27E1C1", "#D5B4B4"];

  return (
    <div className="weather_div">
      <SearchInput searchbutton={true} placeholder={"Search a new place"} />
      <p>
        Weather <span>Forecast</span>
      </p>
      <div className="cityCards_container">
        {cityData.map((data, ind) => {
          return (
            <CityCard
              key={ind}
              color={colors[ind % colors.length]}
              city={data.city}
            />
          );
        })}
      </div>
      <TimePeriod />
    </div>
  );
};

export default WeatherDiv;
