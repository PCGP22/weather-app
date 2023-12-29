import { translateIcons } from "../utils/translating"
import { conversionContext } from "../context/context"
import { convertToCelsius } from "../utils/translating";
import { useContext } from "react"

function HourForeCast({data}) {

  const [conversion] = useContext(conversionContext);
  const temp = conversion === "C" ? convertToCelsius(data.temp) : data.temp;
  const hour = data.datetime.split("").slice(0, -3).join("");
  
  return (
    <div className='hourWrapper'>
        <p>{hour}</p>
        <img src={translateIcons(data.icon)} alt={`${data.icon} icon`} width={30}/>
        <p>{temp}°</p>
    </div>
  )
}

export default HourForeCast