import SearchBar from "./components/SearchBar"
import WeatherMain from "./components/WeatherMain"
import Description from "./components/Description"
import ControlPanel from "./components/ControlPanel"
import WeekForeCast from "./components/WeekForeCast"
import AdditionalData from "./components/AdditionalData"
import placeHolder from "./utils/placeHolderWeather.json"
import { dataContext, conversionContext } from "./context/context"
import { useState } from "react"


function App() {

  const [weatherData, setWeatherData] = useState(placeHolder);
  const [conversion, setConversion] = useState("C");

  return (
    <dataContext.Provider value={[weatherData, setWeatherData]}>
      <conversionContext.Provider value ={[conversion, setConversion]}>
        <div className="wrapper">
          <div>
            <SearchBar/>
            <WeatherMain/>
            <Description/>
          </div>
          <div className="lastContainer">
            <ControlPanel/>
            <WeekForeCast/>
            <AdditionalData/>
            <footer>
              <span>Made by Paulo César Gutiérrez Padilla </span> 
              <span>PCGP22@gmail.com</span>
            </footer>
          </div>
        </div>
      </conversionContext.Provider>
    </dataContext.Provider>
  )
}

export default App
