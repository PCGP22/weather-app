import { conversionContext } from "../context/context"
import { useContext } from "react"
import { translateDay, translateIcons, convertToCelsius } from "../utils/translating"

function DayForeCast({data}) {
  
  const [conversion] = useContext(conversionContext);
  const date = new Date(data.datetime);
  const day = date.getDay();
  const tempmin = conversion === "C" ? convertToCelsius(data.tempmin) : data.tempmin;
  const tempmax =  conversion === "C" ? convertToCelsius(data.tempmax) : data.tempmax;

  return (
    <div>
        <h4>{translateDay(day)}</h4>
        <img src={translateIcons(data.icon)} alt={`${data.icon} icon`} width={30}/>
        <div>
            <p>{tempmin}° -</p>
            <span>{tempmax}°</span>
        </div>
    </div>
  )
}

export default DayForeCast