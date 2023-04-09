import React, { useState } from "react";

const TimePeriod = () => {
  const TIME_PERIODS = ["Week", "Month", "3 Months", "6 Months"];

  const [displayed, setDisplayed] = useState(TIME_PERIODS[0]);

  return (
    <div className="time_period_div">
      <div className="selector">
        {TIME_PERIODS.map((period, ind) => {
          return (
            <div key={ind} className="selector_button">
              <p>{period}</p>
              {period == displayed ? (
                <div className="activeTab"></div>
              ) : (
                <div></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimePeriod;
