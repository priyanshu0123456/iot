import React, { useEffect, useState } from 'react'
import "../style/project.css"

import fan from "../assets/videos/fan.mp4"
import ceilingfan from "../assets/videos/ceilingfan.mp4"

import bulb from '../assets/videos/bulb.mp4'
import data from '../data/Sentence';
import axios from 'axios';
import FanBtn from '../component/Home/FanBtn'

export default function Project() {

  const handleSwitchToggle1 = async () => {
  
    const response = await axios.post("https://iotworld.onrender.com/api/v1/bulbtoggle", {});

    console.log(response);
  };

  const handleSwitchToggle2 = async () => {
  
    const response = await axios.post("https://iotworld.onrender.com/api/v1/fantoggle", {});

    console.log(response);
  };

  const [index, setindex] = useState(0)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setindex((prevIndex) => (prevIndex + 1) % 4);
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, [index] ) ;

  const [device1, setdevice1] = useState(false);
  const [device2, setdevice2] = useState(false);
  const [device3, setdevice3] = useState(false);
  const [device4, setdevice4] = useState(false);


  return (
    <div className='wraper'>
      <div className="box">

        <div className="hero">
          <img className='slogen' src={data[index].imgloc} alt="network check karo.." />
        </div>

        <div className='device-heading'>
          Nearby Devices
        </div>

        <div className="devices">

          {/* .....................device 1 code..................... */}
          <div className="device device1">
            {device1 ?
              <div className='device-image'>
                <video muted loop autoPlay src={bulb}></video>
              </div> :
              <div className='device-text'>
                Device1 is off
              </div>
            }

            <div className='btn' onClick={() => {
              setdevice1(!device1); // Toggle the state
              handleSwitchToggle1();
            }}>
              bulb1  {device1 ? <span>OFF</span> : <span>ON</span>}
            </div>
          </div>

          {/* .................... device 2 code ......................... */}
          <div className="device device2">
            {
              device2 ?
                <div className='device-image'>
                  <video muted loop autoPlay src={fan}></video>
                </div> :

                <div className='device-text' >
                  Device2 is off
                </div>
            }

            <div className='btn' onClick={() => {
              setdevice2(!device2)
              handleSwitchToggle2();
            }}>
              fan1  {device2 ? <span>OFF</span> : <span>ON</span>}
            </div>

          </div>

          {/* .......................... device 3 .......................... */}
          <div className="device device3">
            {
              device3 ?
                <div className='device-image'>
                  <video muted loop autoPlay src={ceilingfan}></video>
                </div>
                :
                <div className='device-text'>
                  Device3 is off
                </div>
            }

            <div className="btn" onClick={() => {
              setdevice3(!device3)
            }}>
              fan2 {device3 ? <span>OFF</span> : <span>ON</span>}
            </div>

          </div>


          {/* ............................. device 4 .................. */}
          <div className="device device4">
            {
              device4 ?
                <div className='device-image'>
                  <video muted loop autoPlay src={bulb}></video>
                </div> :

                <div className='device-text'>
                  device4 is off
                </div>
            }

            <div className="btn" onClick={() => {
              setdevice4(!device4);
            }}>
              bulb2 {device4 ? <span>OFF</span> : <span>ON</span>}
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}
