import  {FC} from 'react'
import {Weather} from '../model/Weather'
import { getIconUrl } from '../services/WeatherService'

interface WeatherEntryProps{

    weather: Weather;
}

function convertUnixTimeToDate (unixUtc: number): Date {

    return new Date(unixUtc * 1000)
}

export const WeatherEntry: FC<WeatherEntryProps> = ({weather}) => 

<div className="d-flex justify-content-evenly mb-5 mt-5 weatherEntry">
  
  <div>
      <strong style={{fontSize:"40px"}}> {Math.floor(weather.main.temp)}°C</strong>
     
  </div>
  <div className="d-flex flex-column">
      <div>Humidity: {weather.main.humidity}%</div>
    <div>{convertUnixTimeToDate(weather.dt).toLocaleTimeString()}</div>
      <div>({weather.main.temp_min}°C / {weather.main.temp_max}°C)</div>
  </div>
  
  {weather.weather.map(condition => 
    <div key={condition.id}>
       <img  src={getIconUrl(condition.icon)} alt={condition.main}  /> {condition.main} {condition.description}

    </div>)}
</div>
