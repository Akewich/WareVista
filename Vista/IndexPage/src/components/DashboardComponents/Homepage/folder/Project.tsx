import { Button } from "react-bootstrap";
import Profile from "../../Profile/Profile";
import Sidebar from "../../Sidebar";
import "./Project.scss";
import { files } from "../../../data";
import CardList from "../Card/CardList";
import Popup from "./Popup";
import { useState } from "react";

const Project = () => {
  const [createProject, setCreateProject] = useState(false);

  const card = files.map((item) => {
    return <CardList img={item.img} name={item.name} />;
  });
  return (
    <div className="project">
      <Sidebar />
      <div className="projectContent">
        <div className="optionProject ">
          <h2>Your project</h2>
          <Button
            onClick={setCreateProject.bind(this, true)}
            className="me-3"
            variant="secondary"
          >
            <i className="bi bi-plus-lg pe-2" />
            New project
          </Button>
          {createProject && <Popup setCreateProject={setCreateProject} />}

          <Button variant="secondary">Import</Button>
          <div className="wrapper">{card}</div>
        </div>

        <Profile />
      </div>
    </div>
  );
};

export default Project;
