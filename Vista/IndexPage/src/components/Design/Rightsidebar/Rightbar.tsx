import "./Rightbar.scss";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import RectangleIcon from "@mui/icons-material/Rectangle";
import { Box, Button, IconButton } from "@mui/material";
import { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";

const Rightbar = () => {
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);
  const [showC, setShowC] = useState(false);
  const [showD, setShowD] = useState(false);

  const [lockA, setLockA] = useState(false);
  const [lockB, setLockB] = useState(false);
  const [lockC, setLockC] = useState(false);
  const [lockD, setLockD] = useState(false);

  const handleOpenA = () => {
    setShowA(!showA);
  };
  const handleOpenB = () => {
    setShowB(!showB);
  };
  const handleOpenC = () => {
    setShowC(!showC);
  };
  const handleOpenD = () => {
    setShowD(!showD);
  };

  const handleLockA = () => {
    setLockA(!lockA);
  };
  const handleLockB = () => {
    setLockB(!lockB);
  };
  const handleLockC = () => {
    setLockC(!lockC);
  };
  const handleLockD = () => {
    setLockD(!lockD);
  };

  return (
    <>
      <div className="rightDesign">
        <div className="toolsBox">
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: "#282828",
              borderRadius: "5px",
            }}
            width={255}
            height={37}
          >
            <Button
              variant="text"
              sx={{ color: "#fff", border: "2px black solid", fontSize: 12 }}
            >
              Position
            </Button>
            <Button
              sx={{
                color: "#fff",
                borderBlock: "2px black solid",
                fontSize: 12,
              }}
            >
              Color
            </Button>
            <Button
              sx={{ color: "#fff", border: "2px black solid", fontSize: 12 }}
            >
              Libraries
            </Button>
          </Box>
          <div className="itemPick">
            <Box
              sx={{
                flexGrow: 1,

                bgcolor: "white",
                borderRadius: "5px",
              }}
              width={220}
              height={80}
            ></Box>
          </div>
          {/* Scale */}
          <div className="line"></div>
          <span className="topicTool">Scale</span>
          <div className="scaleSet">
            <label className="text " htmlFor="">
              length
            </label>
            <input placeholder="0" className="scaleForm" type="text" />
          </div>
          <div className="scaleSet">
            <label className="text " htmlFor="">
              width
            </label>
            <input placeholder="0" className="scaleForm" type="text" />
          </div>
          {/* Position */}
          <div className="line"></div>
          <span className="topicTool">Position</span>
          <div className="postionShow">
            <div className="scaleSet">
              <label className="text " htmlFor="">
                <span>X :</span>
              </label>
              <input placeholder="0 px" className="scaleSetBox" type="text" />
            </div>
            <div className="scaleSet">
              <label className="text " htmlFor="">
                <span>Y :</span>
              </label>
              <input placeholder="0 px" className="scaleSetBox" type="text" />
            </div>
            <div className="scaleSet">
              <label className="text " htmlFor="">
                <span>W :</span>
              </label>
              <input placeholder="0 px" className="scaleSetBox" type="text" />
            </div>
            <div className="scaleSet">
              <label className="text " htmlFor="">
                <span>H :</span>
              </label>
              <input placeholder="0 px" className="scaleSetBox" type="text" />
            </div>
          </div>
          {/* Degree */}
          <div className="line"></div>
          <span className="topicTool">Degree</span>
          <div className="scaleSet">
            <label className="text " htmlFor="">
              <span>x :</span>
            </label>
            <input placeholder="0 degree" className="scaleForm" type="text" />
          </div>
          <div className="scaleSet">
            <label className="text " htmlFor="">
              <span>y :</span>
            </label>
            <input placeholder="0 degree" className="scaleForm" type="text" />
          </div>
          {/* tool 2 */}
          <div className="lineTool"></div>
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: "#282828",
              borderRadius: "5px",
            }}
            width={255}
            height={37}
          >
            <Button
              variant="text"
              sx={{ color: "#fff", border: "2px black solid", fontSize: 12 }}
            >
              Layer
            </Button>
            <Button
              sx={{
                color: "#fff",
                borderBlock: "2px black solid",
                fontSize: 12,
              }}
            >
              Chanel
            </Button>
            <Button
              sx={{ color: "#fff", border: "2px black solid", fontSize: 12 }}
            >
              Path
            </Button>
          </Box>
          <Box width={255} height={40} sx={{ borderBottom: 2 }}>
            <Box
              width={40}
              height={40}
              sx={{ borderRight: 2, borderLeft: 2, display: "flex" }}
            >
              <IconButton onClick={handleOpenA}>
                {showA ? (
                  <RectangleIcon className="iconShow" />
                ) : (
                  <RemoveRedEyeIcon className="iconShow" />
                )}{" "}
              </IconButton>
              <RectangleIcon className="iconShowBox" />
              <span className="textBox">Box1</span>
              <div className="iconKey">
                <IconButton onClick={handleLockA}>
                  {lockA ? (
                    <LockOpenIcon className="iconLock" />
                  ) : (
                    <LockIcon className="iconLock" />
                  )}
                </IconButton>
              </div>
            </Box>
          </Box>
          <Box width={255} height={40} sx={{ borderBottom: 2 }}>
            <Box
              width={40}
              height={40}
              sx={{ borderRight: 2, borderLeft: 2, display: "flex" }}
            >
              <IconButton onClick={handleOpenB}>
                {showB ? (
                  <RectangleIcon className="iconShow" />
                ) : (
                  <RemoveRedEyeIcon className="iconShow" />
                )}{" "}
              </IconButton>
              <RectangleIcon className="iconShowBox" />
              <span className="textBox">Box2</span>
              <div className="iconKey">
                <IconButton onClick={handleLockB}>
                  {lockB ? (
                    <LockOpenIcon className="iconLock" />
                  ) : (
                    <LockIcon className="iconLock" />
                  )}
                </IconButton>
              </div>
            </Box>
          </Box>
          <Box width={255} height={40} sx={{ borderBottom: 2 }}>
            <Box
              width={40}
              height={40}
              sx={{ borderRight: 2, borderLeft: 2, display: "flex" }}
            >
              <IconButton onClick={handleOpenC}>
                {showC ? (
                  <RectangleIcon className="iconShow" />
                ) : (
                  <RemoveRedEyeIcon className="iconShow" />
                )}{" "}
              </IconButton>
              <RectangleIcon className="iconShowBox" />
              <span className="textBox">Box3</span>
              <div className="iconKey">
                <IconButton onClick={handleLockC}>
                  {lockC ? (
                    <LockOpenIcon className="iconLock" />
                  ) : (
                    <LockIcon className="iconLock" />
                  )}
                </IconButton>
              </div>
            </Box>
          </Box>
          <Box
            width={255}
            height={40}
            sx={{ borderBottom: 2, display: "flex" }}
          >
            <Box
              width={40}
              height={40}
              sx={{ borderRight: 2, borderLeft: 2, display: "flex" }}
            >
              <IconButton onClick={handleOpenD}>
                {showD ? (
                  <RectangleIcon className="iconShow" />
                ) : (
                  <RemoveRedEyeIcon className="iconShow" />
                )}{" "}
              </IconButton>
              <RectangleIcon className="iconShowBox" />
              <span className="textBox">Box4</span>
              <div className="iconKey">
                <IconButton onClick={handleLockD}>
                  {lockD ? (
                    <LockOpenIcon className="iconLock" />
                  ) : (
                    <LockIcon className="iconLock" />
                  )}
                </IconButton>
              </div>
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Rightbar;
