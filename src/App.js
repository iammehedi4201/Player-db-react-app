import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import Error from "./Components/Error/Error";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import PlayerDetails from "./Components/PlayerDetails/PlayerDetails";
import Players from "./Components/Players/Players";

export const InputContext = React.createContext("Input");

function App() {
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const catchInputValue = (e) => {
    e.preventDefault();

    const value = document.getElementById("input-field").value;

    setInputValue(value);

    const path = "/Players";

    navigate(path);

    document.getElementById("input-field").value = "";
  };

  return (
    <InputContext.Provider value={catchInputValue}>
      <div className="App">
        <Header></Header>

        {/* React Router link */}
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/Players"
            element={<Players inputValue={inputValue}></Players>}
          ></Route>
          <Route
            path="/Friend/:playerid"
            element={<PlayerDetails></PlayerDetails>}
          ></Route>
          <Route path="/About" element={<AboutUs></AboutUs>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>

        <Footer></Footer>
      </div>
    </InputContext.Provider>
  );
}

export default App;
