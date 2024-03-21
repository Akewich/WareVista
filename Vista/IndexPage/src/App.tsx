import "./App.css";
import Build from "./components/Build";
import Database from "./components/Database";
import Detail from "./components/Detail";
import Footer from "./components/Footer";
import Header from "./components/HeaderComponets/Header";
import Home from "./components/Home";
import Service from "./components/Service";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Service />
      <Detail />
      <Database />
      <Build />
      <Footer />
    </div>
  );
}

export default App;
