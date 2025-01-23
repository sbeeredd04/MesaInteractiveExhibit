import React from "react";
//import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartingPage from "./StartingPage";
import RoomPage from "./roompage";
import ContentScene from "./objects/ContentScene";
import Environment from "./pages/environment/environment"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartingPage />} />
        <Route path="/room" element={<RoomPage />} />
        <Route path="/flipbook" element={<ContentScene />} />
      </Routes>
    </>
  );
}
export default App;
