import { Box, Button, styled } from "@mui/material";
import Sidebar from "../../Sidebar";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./Help.scss";

const Help = () => {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    overflow: "hidden",
    position: "absolute",
    whiteSpace: "nowrap",
  });
  return (
    <div className="help">
      <Sidebar />
      <div className="helpContent ">
        Help
        <div className="boxHelp">
          <Box width={790} height={840} sx={{ bgcolor: "#DCDFE7" }}>
            <div className="upload">
              <Button
                component="label"
                role={undefined}
                variant="outlined"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                sx={{
                  width: 717,
                  height: 375,
                  borderRadius: 10,
                  color: "#000",
                  bgcolor: "#fff",
                  border: "#fff",
                  mt: 5,
                }}
              >
                Import your picture
                <VisuallyHiddenInput type="file" className="iconCloud" />
              </Button>
            </div>
            <div className="comment">
              <input className="commentBox" type="text"></input>
            </div>
            <div className="submitBox">
              <Button variant="contained" color="warning">
                {" "}
                Submit{" "}
              </Button>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Help;
