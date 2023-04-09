import "./App.css";
import TodaysWeather from "./components/TodaysWeather";
import WeatherDiv from "./components/WeatherDiv";

function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherDiv />
        <TodaysWeather />
      </div>
    </div>
  );
}

export default App;
