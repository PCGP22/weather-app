//Identifies if what is received is a zip code or a location name
async function fetchData(location){
    if(isNaN(parseInt(location))){
        return await fetchWeather(location)
    } else {
        return await getByZipCode(location)
    }
}

//Fetch the weather using the location name
function fetchWeather(location){
    try{
        return fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=HLREZQD89AFQAGPYZSQKNL2X5`)
        .then(res => res.json())
        .then((data) => data)
    }
    catch(e){
        console.log(e)
    }
}

//Fetch the city name with the zip code (US ONLY)
function getByZipCode(code){
    try{
        return fetch(`https://api.zipcodestack.com/v1/search?codes=${code}&country=us&apikey=01HJSBS4Q0C1Q7NFYF99Q9BYP0`)
        .then(res => res.json())
        .then((data) => {
            let city = data.results[code][0].city
            city = parseSpaces(city);
            return city
        })
        .then(city => fetchWeather(city))
        .then(data => data)
    }
    catch(e){
        console.log(e)
    }
}

//Replaces any space with underscores after trimming the location name
//this is due to the weather API limitations
function parseSpaces(string){
    return string.trim().replaceAll(" ", "_")
}

export default fetchData;
