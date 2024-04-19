import React from "react";
import "./Rightbar.scss";
import { Box, Button } from "@mui/material";
const Rightbar = () => {
  return (
    <section className="rightDesign">
      <Box
        mt={4}
        ml={1}
        alignItems="center"
        sx={{
          flexGrow: 1,
          background: "#AEAEAE",
          borderRadius: "5px",
        }}
        width={225}
        height={40}
      >
        <Button sx={{ color: "#000" }}>Position</Button>
        <Button sx={{ color: "#000" }}>Color</Button>
        <Button sx={{ color: "#000" }}>Libraries</Button>
      </Box>
    </section>
  );
};

export default Rightbar;
