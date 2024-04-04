import "./App.css";
import Build from "./components/ContentComponents/Build";
import Database from "./components/ContentComponents/Database";
import Detail from "./components/ContentComponents/Detail";
import Footer from "./components/ContentComponents/Footer";
import Home from "./components/ContentComponents/Home";
import Service from "./components/ContentComponents/Service";

const App = () => {
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
};

export default App;
