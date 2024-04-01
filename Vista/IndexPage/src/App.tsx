import "./App.css";
import Build from "./components/ContentConponents/Build";
import Database from "./components/ContentConponents/Database";
import Detail from "./components/ContentConponents/Detail";
import Footer from "./components/ContentConponents/Footer";
import Home from "./components/ContentConponents/Home";
import Service from "./components/ContentConponents/Service";

function App() {
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
