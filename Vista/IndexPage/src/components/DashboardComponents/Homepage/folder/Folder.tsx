import { Button } from "react-bootstrap";
import Profile from "../../Profile/Profile";
import Sidebar from "../../Sidebar";
import "./Project.scss";
import { Project } from "../../../data";
import Card from "../Card/Card";

const Folder = () => {
  const card = Project.map((item) => {
    return <Card img={item.img} name={item.name} />;
  });
  return (
    <div className="project">
      <Sidebar />
      <div className="projectContent">
        <div className="optionProject ">
          <h2>Your project</h2>
          <Button className="me-3" variant="secondary">
            <i className="bi bi-plus-lg pe-2" />
            New project
          </Button>
          <Button className="" variant="secondary">
            Import
          </Button>
          <div className="wrapper">{card}</div>
        </div>
        <Profile />
      </div>
    </div>
  );
};

export default Folder;
