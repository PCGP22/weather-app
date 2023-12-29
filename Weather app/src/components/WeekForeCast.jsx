import DayForeCast from "./DayForeCast"
import {dataContext} from "../context/context"
import {useContext} from "react"

function WeekForeCast() {

  const [weatherData] = useContext(dataContext)

  return (
    <div className="frontBlue">
        <h3>This week</h3>
        <div className='weekDaysContainer'>
            <DayForeCast data={weatherData.days[1]}/>
            <li/>
            <DayForeCast data={weatherData.days[2]}/>
            <li/>
            <DayForeCast data={weatherData.days[3]}/>
            <li/>
            <DayForeCast data={weatherData.days[4]}/>
            <li/>
            <DayForeCast data={weatherData.days[5]}/>
            <li/>
            <DayForeCast data={weatherData.days[6]}/>
            <li/>
            <DayForeCast data={weatherData.days[7]}/>
        </div>
    </div>
  )
}

export default WeekForeCast