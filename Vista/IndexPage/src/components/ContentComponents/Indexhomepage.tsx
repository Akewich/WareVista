import Home from "./Home";
import Service from "./Service";
import Detail from "./Detail";
import Database from "./Database";
import Build from "./Build";
import Footer from "./Footer";

const Indexhomepage = () => {
  return (
    <div>
      <div className="home">
        <Home />
        <Service />
        <Detail />
        <Database />
        <Build />
        <Footer />
      </div>
    </div>
  );
};

export default Indexhomepage;
