import React, { useState, useRef } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import "bootstrap-icons/font/bootstrap-icons.css";

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
  bounds,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const nodeRef = useRef(null);

  const handleStop = (e: DraggableEvent, data: DraggableData) => {
    const gridSize = 220; // Assuming each cell is 220x220px
    const gap = 10; // Gap between cells

    const newX = Math.round(data.x / (gridSize + gap)) * (gridSize + gap);
    const newY = Math.round(data.y / (gridSize + gap)) * (gridSize + gap);
    
    setPosition({ x: newX, y: newY });
  };

  return (
    <Draggable nodeRef={nodeRef} bounds={bounds} position={position} onStop={handleStop}>
      <div ref={nodeRef} className="card" style={{ cursor: "move" }}>
        <div className="card-body">
        <i className={`bi ${isDaytime ? "bi-sun" : "bi-moon"} display-4 weather-icon`}></i>
          <h5 className="card-title">{location}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {isDaytime ? "Daytime" : "Nighttime"}
          </h6>
          <p className="card-text">{temperature}°C</p>
        </div>
      </div>
    </Draggable>
  );
};

export default WeatherWidget;
