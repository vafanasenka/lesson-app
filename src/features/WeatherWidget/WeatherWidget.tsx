import React from "react";
import Draggable from "react-draggable";
import 'bootstrap-icons/font/bootstrap-icons.css';

interface WeatherWidgetProps {
  location: string;
  temperature: number;
  isDaytime: boolean;
  bounds: string;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({
  location,
  temperature,
  isDaytime,
  bounds
}) => {
  return (
    <Draggable bounds={bounds}>
      <div className="card" style={{ width: "18rem", cursor: "move" }}>
        <div className="card-body">
          <h5 className="card-title">{location}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {isDaytime ? "Daytime" : "Nighttime"}
          </h6>
          <p className="card-text">{temperature}°C</p>
          <i className={`bi ${isDaytime ? 'bi-sun' : 'bi-moon'} display-4`}></i>
        </div>
      </div>
    </Draggable>
  );
};

export default WeatherWidget;
