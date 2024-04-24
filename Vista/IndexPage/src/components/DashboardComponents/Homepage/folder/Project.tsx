import Profile from "../../Profile/Profile";
import Sidebar from "../../Sidebar";
import "./Project.scss";
import { files } from "../../../data";
import CardList from "../Card/CardList";
import Popup from "./Popup";
import { useState } from "react";
import { Button, styled } from "@mui/material";

const Project = () => {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
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
            variant="contained"
            sx={{ bgcolor: "gray" }}
          >
            <i className="bi bi-plus-lg pe-2" />
            New project
          </Button>
          {createProject && <Popup setCreateProject={setCreateProject} />}

          <Button
            component="label"
            role={undefined}
            variant="contained"
            sx={{ bgcolor: "gray" }}
          >
            Import
            <VisuallyHiddenInput type="file" />
          </Button>
          <div className="wrapper">{card}</div>
        </div>

        <Profile />
      </div>
    </div>
  );
};

export default Project;
