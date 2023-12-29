import {dataContext} from "../context/context"
import {useContext} from "react"

function Description() {

  const [weatherData] = useContext(dataContext)

  return (
    <div className="frontBlue">
        <h3>Description</h3>
        <p>{weatherData.description}</p>
    </div>
  )
}

export default Description