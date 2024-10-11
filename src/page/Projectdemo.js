import React, { useState } from 'react';
import axios from 'axios';
import onled from '../assets/Images/redled.jpg'
import offled from '../assets/Images/offled.jpg'

export default function ProjectDemo() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleSwitchToggle =  async() => {
    setIsSwitchOn((prev) => !prev);

  const response = await axios.post("https://iotworld.onrender.com/api/v1/toggle" , {} ) ;

     console.log(response);
  };



  return (
    <div className="project-demo flex justify-center items-center h-screen">
      <div className="text-center">
        <img
          src={isSwitchOn ? onled : offled}
          alt="LED"
          className={`w-32 h-32 ${isSwitchOn ? 'bg-green-500' : 'bg-gray-400'}`}
        />
        <p className="text-lg font-semibold">
          {isSwitchOn ? 'LED OFF' : 'LED ON'}
        </p>
      </div>

      <div className="mx-4">
        <button
          className={` text-white px-4 py-2 rounded-full ${
            isSwitchOn ? 'bg-green-600' : 'bg-red-600'
          }`}
          onClick={handleSwitchToggle}
        >
          {isSwitchOn ? 'Turn OFF' : 'Turn ON'}
        </button>
      </div>
    </div>
  );
}
