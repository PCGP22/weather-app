import { conversionContext } from "../context/context"
import { useContext } from "react"

function ControlPanel() {

  const [conversion, setConversion] = useContext(conversionContext);
  function handleClick(){
    if(conversion === "C") {
      setConversion("F")
    }  else {
      setConversion("C")
    }
  }

  return (
    <div className='controlPanel frontBlue'>
      <h3>Control Panel</h3>
        <p>Change Measure</p>
        <div>
          <button type='button' onClick={handleClick}>{conversion}°</button>
          <label>Degrees</label>
        </div>
    </div>
  )
}

export default ControlPanel