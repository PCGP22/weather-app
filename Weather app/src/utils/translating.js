import snowIcon from "../../public/Icons/Snow.png"
import rainIcon from "../../public/Icons/Rainy.png"
import fogIcon from "../../public/Icons/Fog.png"
import windIcon from "../../public/Icons/Wind.png"
import cloudIcon from "../../public/Icons/Cloud.png"
import partCloudIcon from "../../public/Icons/Cloudy.png"
import cloudMoonIcon from "../../public/Icons/CloudMoon.png"
import sunIcon from "../../public/Icons/Sunny.png"
import moonIcon from "../../public/Icons/Moon.png"
import humidIcon from "../../public/Icons/Humidity.png"

export function translateDay(number){
    const translator = {0: "Mon", 1: "Tue", 2: "Wed", 3: "Thu", 4: "Fri", 5: "Sat", 6: "Sun"}
    return translator[number]
}

export function translateName(location){
    let result = location.replaceAll("_"," ");
    return firstLetterUpperCase(result)
}

function firstLetterUpperCase(string){
    let result = string.split("")
    result[0] = result[0].toUpperCase();
    return result.join("");
}

export function translateIcons(iconName){
    const translator = {
        "snow": snowIcon, 
        "rain": rainIcon, 
        "Rain": rainIcon,
        "fog": fogIcon, 
        "wind": windIcon,
        "Wind": windIcon, 
        "cloudy": cloudIcon, 
        "partly-cloudy-day": partCloudIcon, 
        "partly-cloudy-night":cloudMoonIcon, 
        "Humidity": humidIcon,
        "UV": sunIcon,
        "clear-day": sunIcon, 
        "clear-night": moonIcon
    }
    return translator[iconName]
}


export function convertToCelsius(temp){
    const converted = (temp - 32) * 5 / 9;
    return converted.toFixed(2)
}
