import imageLogo from "../../Images/WareHouseLOGO.png";
import { Image } from "react-bootstrap";
import "./Sidebar.css";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <>
      <div className="sideMenu p-2">
        <div className="sideBarLogo">
          <Image src={imageLogo} fluid width={100} height={100} />
        </div>
        <div className="sideList pt-3">
          <div className="navItem my-3">
            <Link
              to={"/dashboard"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <i className="bi bi-house-fill me-2"></i>
              Home
            </Link>
          </div>
          <div className="navItem my-3">
            <Link
              to={"/dashboard"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <i className="bi bi-heart-fill me-2"></i>
              Favorite
            </Link>
          </div>
          <div className="navItem my-3">
            <Link
              to={"/dashboard"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <i className="bi bi-bar-chart-line me-2"></i>
              Monitor
            </Link>
          </div>
          <div className="navItem my-3">
            <Link
              to={"/dashboard"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <i className="bi bi-gear me-2"></i>
              Setting
            </Link>
          </div>
          <div className="navItem my-3">
            <Link
              to={"/dashboard"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <i className="bi bi-question-circle me-2"></i>
              Help
            </Link>
          </div>
          <div className="navItem my-3">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/login"}
            >
              <i className="bi bi-box-arrow-right me-2"></i>
              Logout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
