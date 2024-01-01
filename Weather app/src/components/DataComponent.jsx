import { translateIcons } from "../utils/translating"

function DataComponent({data, unit = " ", name}) {
  return (
    <div>
        <img src={translateIcons(name)} alt={`${name} icon`} width={50}/>
        <h4> {name}</h4>
        <p className="data">{data}</p>
        <p className="unit">{unit}</p>
    </div>
  )
}

export default DataComponent