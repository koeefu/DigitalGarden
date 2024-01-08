import { Routes, Route } from "react-router-dom";
import React from "react";
import NavBar from "./NavBar";
import GardenPage from "./pages/GardenPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="garden" element={<GardenPage />} />
      </Routes>
    </>
  );
}

export default App;
