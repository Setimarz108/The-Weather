import  {FC} from "react";
import {WeatherLocation} from "../model/Weather";

interface LocationTableProps {
  locations: WeatherLocation[];
  current: WeatherLocation | null;
  onSelect: (location: WeatherLocation) => void;
}

export const LocationTable: FC<LocationTableProps> = ({locations, onSelect, current}) =>
  <div className="locationWeather">
    <div className="d-flex justify-content-center"><h4 > click on a city</h4></div> 
    <table className="mytable
    ">
      <thead>
      
      </thead>
      <tbody>
      {locations.map(location =>
      <tr className={current?.id === location.id ? 'table-primary' : ''}
          onClick={() => onSelect(location)}>
        <td><h3>{location.name} -</h3> </td>
      </tr>
      )}
      </tbody>
    </table>
  </div>;