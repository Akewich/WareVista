import imageLogo from "../../Images/WareHouseLOGO.png";
import { Image } from "react-bootstrap";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <>
      <div className="sideMenu p-2">
        <div className="sideBarLogo">
          <Image src={imageLogo} fluid width={100} height={100} />
        </div>
        <div className="sideList pt-3">
          <Link
            to={"/dashboard"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <span className="navItem">
              <i className="bi bi-house-fill me-2" />
              Home
            </span>
          </Link>
          <Link
            to={"/dashboard"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <span className="navItem">
              <i className="bi bi-heart-fill me-2"></i>
              Favorite
            </span>
          </Link>
          <Link
            to={"/monitor"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <span className="navItem">
              <i className="bi bi-bar-chart-line me-2"></i>
              Monitor
            </span>
          </Link>
          <Link
            to={"/dashboard"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <span className="navItem">
              <i className="bi bi-gear me-2"></i>
              Setting
            </span>
          </Link>
          <Link
            to={"/dashboard"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <span className="navItem">
              <i className="bi bi-question-circle me-2"></i>
              Help
            </span>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"/login"}
          >
            <span className="navItem">
              <i className="bi bi-box-arrow-right me-2"></i>
              Logout
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
