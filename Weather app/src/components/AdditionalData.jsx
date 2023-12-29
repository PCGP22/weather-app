import DataComponent from "./DataComponent"
import {dataContext} from "../context/context"
import {useContext} from "react"

function AdditionalData() {

  const [weatherData] = useContext(dataContext)

  return (
    <section className="frontBlue">
      <h3>Additional Data</h3>
      <div className="additionalData">
          <DataComponent data={weatherData.currentConditions.windspeed} unit="Km/s" name="Wind"/>
          <DataComponent data={weatherData.currentConditions.precipprob} unit="%" name="Rain"/>
          <DataComponent data={weatherData.currentConditions.uvindex} name="UV"/>
          <DataComponent data={weatherData.currentConditions.humidity} unit="%" name="Humidity"/>
      </div>
    </section>
  )
}

export default AdditionalData