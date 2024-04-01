import "./App.css";
import Build from "./components/ContentConponents/Build";
import Database from "./components/ContentConponents/Database";
import Detail from "./components/ContentConponents/Detail";
import Footer from "./components/ContentConponents/Footer";
import Home from "./components/ContentConponents/Home";
import Service from "./components/ContentConponents/Service";
import { useState } from "react";

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
