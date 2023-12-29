import { translateIcons } from "../utils/translating"

function DataComponent({data, unit = " ", name}) {
  return (
    <div>
        <div>
          <img src={translateIcons(name)} alt={`${name} icon`} width={50}/>
          <h3> {name}</h3>
        </div>
        <p className="data">{data}</p>
        <p className="unit">{unit}</p>
    </div>
  )
}

export default DataComponent