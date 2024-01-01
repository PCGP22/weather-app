import fetchData from "../utils/fetching"
import {useState} from "react"
import { dataContext } from "../context/context"
import { useContext } from "react"

function SearchBar() {

  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  const [, setWeatherData] = useContext(dataContext);

  function handleChange(e){
    setSearchTerm(e.target.value)
  }

  async function handleFetch(){
    return await fetchData(searchTerm);
  }
  
  function handleSearch(){
    handleFetch().then(data=>{setWeatherData(data); setError("")}).catch(e=>setError("Please enter a valid location")).finally(setSearchTerm(""));
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      //Detect enter
      handleSearch();
    }
  }

  return (
    <div className="searchBar frontBlue">
        <input 
          type='text' 
          onChange={e=>handleChange(e)} 
          onKeyDown={handleKeyDown}
          value={searchTerm}
          placeholder="Search by location or Zip code"
          autoComplete="country-name"
        />
        <button type='button' onClick={handleSearch}>Search</button>
        {error.length > 2 && <p>{error}</p>}
    </div>
  )
}

export default SearchBar