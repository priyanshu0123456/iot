import '../../style/FanBtn.css'

import React, { useState } from 'react';
import CircularSlider from 'react-circular-slider';


const FanSpeedController = () => {
  const [fanSpeed, setFanSpeed] = useState(0);

  const handleSpeedChange = (value) => {
    setFanSpeed(Math.round(value)); // Round to the nearest integer
  };

  return (
    <div className="fan-speed-container">
      <div className="fan-speed-circle">{fanSpeed}</div>
      <CircularSlider
        width={200}
        label="Fan Speed"
        min={0}
        max={10}
        step={1} // Restrict to integer values
        value={fanSpeed}
        onChange={handleSpeedChange}
        knobColor="#3498db"
        progressColor="#3498db"
        hideLabel
      />
    </div>
  );
};

export default FanSpeedController;

