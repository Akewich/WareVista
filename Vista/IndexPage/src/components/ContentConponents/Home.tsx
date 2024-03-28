import React from "react";
import ImageLogo from "../../components/imageLogo";
import "./Home.css";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import NextWeekOutlinedIcon from "@mui/icons-material/NextWeekOutlined";
import Header from "../HeaderComponets/Header";

const Home = () => {
  return (
    <>
      <Header />
      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12 ps-lg-4 mt-md-5 ">
              <div className="aboutText">
                <h2>WareVista</h2>
                <p>
                  WareVista is a platform that will help administrators or
                  managers managethe warehouses in their warehouses more easily
                  and conveniently with the most automation systems.
                </p>
                <div className="buttoon">
                  <Button
                    sx={{ borderRadius: "12px" }}
                    style={{ color: "Black" }}
                    className="btnA me-4 fs-5"
                    color="warning"
                    variant="contained"
                    endIcon={<LoginIcon />}
                  >
                    Design
                  </Button>
                  <Button
                    sx={{ borderRadius: "12px" }}
                    className="btnB fs-5"
                    style={{ color: "white" }}
                    color="warning"
                    variant="outlined"
                    endIcon={<NextWeekOutlinedIcon />}
                  >
                    Contact us
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12 ">
              <div className="aboutImg">
                <ImageLogo />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
