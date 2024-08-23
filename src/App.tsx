import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ZodiacSigns from "./Components/MainPage";
import HoroscopePage from "./Components/Horoscope";

const App: React.FC = () => {
  return (
    <>
      <HoroscopePage />
    </>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<ZodiacSigns />} />
    //     <Route path="/horoscope/:signName" element={<HoroscopePage />} />
    //   </Routes>
    // </Router>
  );
};

export default App;
