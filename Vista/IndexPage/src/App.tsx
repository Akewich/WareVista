import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
<<<<<<< Updated upstream
import Build from "./components/ContentConponents/Build";
import Database from "./components/ContentConponents/Database";
import Detail from "./components/ContentConponents/Detail";
import Footer from "./components/ContentConponents/Footer";
import Home from "./components/ContentConponents/Home";
import Service from "./components/ContentConponents/Service";
import LoginPage from "./components/LoginPage/LoginPage";
import SignUp from "./components/LoginPage/SignUp";
<<<<<<< Updated upstream
=======
import React from "react";
import Header from "./components/HeaderComponets/Header";
import Home from "./components/ContentComponents/Home";
import Detail from "./components/ContentComponents/Detail";
import Footer from "./components/ContentComponents/Footer";
import Service from "./components/ContentComponents/Service";
import Database from "./components/ContentComponents/Database";
import Build from "./components/ContentComponents/Build";
>>>>>>> Stashed changes
=======
import { useState } from "react";
>>>>>>> Stashed changes

function App() {
  const [isLoading,setIsLoading] = useState(true) 
  return (
    <>
      <Home />
      <Service />
      <Detail />
      <Database />
      <Build /> 
      <Footer />
    </>
  );
}

export default App;
