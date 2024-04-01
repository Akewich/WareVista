import database from "../../Images/database.png";
import { Image } from "react-bootstrap";
import { Button } from "@mui/material";
import "./Database.css";
import NextWeekOutlinedIcon from "@mui/icons-material/NextWeekOutlined";

const Database = () => {
  return (
    <>
      <section id="database" className="database">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-12 ps-lg-5 mt-md-5 ">
              <div className="databaseText">
                <h2>Database</h2>
                <p>
                  We have a database system that can manage everyone's products
                  well. It is dynamic data.
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
            <div className="col-lg-4 col-md-12 col-12">
              <div className="databaseImg">
                <Image src={database} alt="database" fluid />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Database;
