import React from "react";
import detail from "../../Images/City1.png";
import { Image } from "react-bootstrap";
import "./Detail.css";
import NextWeekOutlinedIcon from "@mui/icons-material/NextWeekOutlined";
import { Button } from "@mui/material";
import { BorderColor, Widgets } from "@mui/icons-material";

function Detail() {
  return (
    <>
      <section id="detail" className="detail section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="detailImg ">
                <Image
                  src={detail}
                  alt="Detail"
                  fluid
                  style={{ width: "700px", height: "500px" }}
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-12 py-3 ps-lg-5 mt-md-5">
              <div className="detailText">
                <h2>Warehouse</h2>
                <p>
                  We have services that can make Everyone's warehouse is
                  organized and can be managed freely as needed.
                </p>
                <Button
                  className="fs-5"
                  variant="outlined"
                  sx={{
                    color: "black",
                    borderColor: "black",
                    "&:hover": { borderColor: "black" },
                    borderRadius: "12px",
                  }}
                  endIcon={<NextWeekOutlinedIcon />}
                >
                  Go to page
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Detail;
