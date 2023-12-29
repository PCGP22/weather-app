import { dataContext, conversionContext } from "../context/context"
import { useContext } from "react"
import { translateName, translateIcons } from "../utils/translating"
import { convertToCelsius } from "../utils/translating"
import HourForeCast from "./HourForeCast"

function WeatherMain() {

    const [weatherData] = useContext(dataContext);
    const [conversion] = useContext(conversionContext);
    const date = new Date();
    const hour = date.getHours();
    const temp = conversion === "C" ? convertToCelsius(weatherData.currentConditions.temp) : weatherData.currentConditions.temp;

  return (
    <div className='weatherMain__wrapper frontBlue'>
        <main>
            <div>
                <h1>{translateName(weatherData.address)}</h1>
                <p>{temp}°</p>
            </div>
            <div>
                <img src={translateIcons(weatherData.currentConditions.icon)} alt={`${weatherData.currentConditions.icon} icon`}/>
                <h2>{weatherData.currentConditions.conditions}</h2>
            </div>
        </main>
        <div className='weatherMain__todayWrapper'>
            <HourForeCast data={weatherData.days[1].hours[hour]}/>
            <li/>
            <HourForeCast data={weatherData.days[1].hours[hour+1]}/>
            <li/>
            <HourForeCast data={weatherData.days[1].hours[hour+2]}/>
            <li/>
            <HourForeCast data={weatherData.days[1].hours[hour+3]}/>
            <li/>
            <HourForeCast data={weatherData.days[1].hours[hour+4]}/>
            <li/>
            <HourForeCast data={weatherData.days[1].hours[hour+5]}/>
        </div>
    </div>
  )
}

export default WeatherMain