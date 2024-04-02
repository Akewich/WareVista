import { Link } from "react-router-dom";
import imageLogo from "../../Images/WareHouseLOGO.png";
import { Image, Nav } from "react-bootstrap";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Dashboard.css";
function Dashboard() {
  return (
    <>
      <div className="bg-white sidebar p-2">
        <Nav id="sideBarMenu" className="col-md-3 col-lg-2 d-md-block m-2">
          <div className="sideBar">
            <Image src={imageLogo} fluid width={100} height={100} />
          </div>
          <div className="position-sticky pt-3">
            <ul className="nav flex-column ">
              <li className="nav-item my-3">
                <Link
                  className="Home"
                  to={"/dashboard"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <i className="bi bi-house-fill me-2"></i>
                  Home
                </Link>
              </li>
              <li className="nav-item my-3">
                <Link
                  className="Favorite"
                  to={"/dashboard"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <i className="bi bi-heart-fill me-2"></i>
                  Favorite
                </Link>
              </li>
              <li className="nav-item my-3">
                <Link
                  className="Monitor"
                  to={"/dashboard"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <i className="bi bi-bar-chart-line me-2"></i>
                  Monitor
                </Link>
              </li>
              <li className="nav-item my-3">
                <Link
                  className="Setting"
                  to={"/dashboard"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <i className="bi bi-gear me-2"></i>
                  Setting
                </Link>
              </li>
              <li className="nav-item my-3">
                <Link
                  className="Help"
                  to={"/dashboard"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <i className="bi bi-question-circle me-2"></i>
                  Help
                </Link>
              </li>
              <li className="nav-item my-3">
                <Link
                  className="Logout"
                  style={{ textDecoration: "none", color: "black" }}
                  to={"/login"}
                >
                  <LogoutIcon />
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </Nav>
      </div>
    </>
  );
}

export default Dashboard;
