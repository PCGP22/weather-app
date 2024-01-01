import DayForeCast from "./DayForeCast"
import {dataContext} from "../context/context"
import {useContext} from "react"

function WeekForeCast() {

  const [weatherData] = useContext(dataContext)

  return (
    <div className="frontBlue">
        <h3>This week</h3>
        <div className='forecast_wrapper'>
            <DayForeCast data={weatherData.days[1]}/>
            <DayForeCast data={weatherData.days[2]}/>
            <DayForeCast data={weatherData.days[3]}/>
            <DayForeCast data={weatherData.days[4]}/>
            <DayForeCast data={weatherData.days[5]}/>
            <DayForeCast data={weatherData.days[6]}/>
        </div>
    </div>
  )
}

export default WeekForeCast