import DataComponent from "./DataComponent"
import {dataContext} from "../context/context"
import {useContext} from "react"

function AdditionalData() {

  const [weatherData] = useContext(dataContext)

  return (
    <div className="section frontBlue">
      <h3>Additional Data</h3>
      <div className="additionalData forecast_wrapper">
          <DataComponent data={weatherData.currentConditions.windspeed} unit="Km/s" name="Wind"/>
          <DataComponent data={weatherData.currentConditions.precipprob} unit="%" name="Rain"/>
          <DataComponent data={weatherData.currentConditions.uvindex} name="UV"/>
          <DataComponent data={weatherData.currentConditions.humidity} unit="%" name="Humidity"/>
      </div>
    </div>
  )
}

export default AdditionalData