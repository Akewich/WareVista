import React from "react";
import "./Rightbar.scss";
import { Box, Button } from "@mui/material";
const Rightbar = () => {
  return (
    <section className="rightDesign">
      <Box
        sx={{
          flexGrow: 1,
          background: "#282828",
          borderRadius: "5px",
        }}
        width={255}
        height={40}
      >
        <Button
          variant="text"
          sx={{ color: "#fff", border: "2px black solid" }}
        >
          Position
        </Button>
        <Button sx={{ color: "#fff", borderBlock: "2px black solid" }}>
          Color
        </Button>
        <Button sx={{ color: "#fff", border: "2px black solid" }}>
          Libraries
        </Button>
      </Box>
    </section>
  );
};

export default Rightbar;
