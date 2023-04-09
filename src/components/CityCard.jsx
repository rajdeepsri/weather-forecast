import React from "react";

const CityCard = ({ city, color }) => {
  return (
    <div style={{ backgroundColor: color }} className="city_card">
      {city}
    </div>
  );
};

export default CityCard;
