import "./App.css";

import { Routes, Route } from 'react-router-dom'

import Home from "./page/Home";
import Project from "./page/Project";
import Projectdemo from "./page/Projectdemo";


function App() {
  return (

    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/project-demo" element={<Projectdemo/>} />
      </Routes>

    </div>
  );
}

export default App;
 