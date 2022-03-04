import React from 'react';
import './App.css';
import StartScreen from "./startScreen/StartScreen";
import TimeScreen from "./timeScreen/TimeScreen";
import WeatherScreen from "./weatherScreen/WeatherScreen";
import {Routes, Route} from "react-router-dom";
import currentTime from "../functions/currentTime";

function App() {
  return (
          <div className="App">
              <Routes>
                  <Route path="" element={<StartScreen/>}/>
                  <Route path="/time" element={<TimeScreen currentTime={currentTime}/>}/>
                  <Route path="/weather" element={<WeatherScreen/>} />
              </Routes>
          </div>
  );
}

export default App;
