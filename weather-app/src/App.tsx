import  {FC, useState} from 'react';
import './App.css';
import {ErrorAlert, WarningAlert} from "./components/Alerts"
import {LocationSearch} from './components/LocationSearch'
import {LocationTable} from "./components/LocationTable";
import { WeatherLocation } from './model/Weather';
import {searchLocation} from "../src/services/WeatherService";
import {WeatherSummary} from '../src/components/WeatherSummary'

interface LocationsTable{
  locationsTable:string;
}

const App: FC = () => {

  const [locations, setLocations] = useState<WeatherLocation[]>([]);
  const [currentLocation, setCurrentLocation] = useState <WeatherLocation| null>(null);
  const [error, setError] = useState('');
 const [warning, setWarning] = useState('');

 const resetAlerts = () => {

  setError ('');
  setWarning ('');
 }

 let addLocation = async (term: string) => {

  resetAlerts();
  const location = await searchLocation(term)

  if(!location) {
    setError(`No location found called '${term}'`);
  }else if(locations.find(item => item.id === location.id) ){
    setWarning(`Location '${term}' is already in the list.`);
  }else {
    setLocations([location, ...locations])
  }
 }


  return (
    <div className="container">
      <h1 className="title">The Weather Forecast</h1>
      <header className="header">
      <LocationSearch onSearch={addLocation}/>
      <LocationTable  locations={locations}
      current={currentLocation}
      onSelect={location => setCurrentLocation(location)}/>
      </header>
      <ErrorAlert message={error}/>
      <WarningAlert message={warning}/>
      
       <WeatherSummary location={currentLocation}/>
      
    </div>
  );
}

export default App;
