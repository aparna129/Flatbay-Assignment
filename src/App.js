import React from "react";
import { Routes, Route } from "react-router-dom";
import FirstPage from "./Pages/FirstPage";
import PublishPage from "./Pages/PublishPage";
import Stepper from "./Pages/Stepper";

function App() {
  return (
    <div
      style={{
        marginLeft: "5vw",
        marginTop: "5vh",
        marginRight: "5vw",
        marginBottom: "5vh",
      }}
    >
      <Routes>
        <Route path="/" element={<FirstPage />}></Route>
        <Route path="/steps" element={<Stepper />}></Route>
        <Route path="/publish" element={<PublishPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
