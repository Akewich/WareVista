import imageLogo from "../../Images/WareHouseLOGO.png";
import { Image } from "react-bootstrap";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const [selected, setSelected] = useState(0);

  const handleItemClick = (index: any) => {
    setSelected(index);
  };

  return (
    <>
      <div className="sideMenu p-2">
        <div className="sideBarLogo">
          <Image src={imageLogo} fluid width={100} height={100} />
        </div>
        <div className="sideList active pt-3">
          <Link
            to={"/dashboard"}
            style={{ textDecoration: "none", color: "black" }}
            onClick={() => handleItemClick(0)}
          >
            <span className={`navItem ${selected === 0 ? "active" : ""}`}>
              <i className="bi bi-house-fill me-2" />
              Home
            </span>
          </Link>
          <Link
            to={"/favorite"}
            style={{ textDecoration: "none", color: "black" }}
            onClick={() => handleItemClick(1)}
          >
            <span className={`navItem ${selected === 1 ? "active" : ""}`}>
              <i className="bi bi-heart-fill me-2"></i>
              Favorite
            </span>
          </Link>
          <Link
            to={"/monitor"}
            style={{ textDecoration: "none", color: "black" }}
            onClick={() => handleItemClick(2)}
          >
            <span className={`navItem ${selected === 2 ? "active" : ""}`}>
              <i className="bi bi-bar-chart-line me-2"></i>
              Monitor
            </span>
          </Link>
          <Link
            to={"/setting"}
            style={{ textDecoration: "none", color: "black" }}
            onClick={() => handleItemClick(3)}
          >
            <span className={`navItem ${selected === 3 ? "active" : ""}`}>
              <i className="bi bi-gear me-2"></i>
              Setting
            </span>
          </Link>
          <Link
            to={"/help"}
            style={{ textDecoration: "none", color: "black" }}
            onClick={() => handleItemClick(4)}
          >
            <span className={`navItem ${selected === 4 ? "active" : ""}`}>
              <i className="bi bi-question-circle me-2"></i>
              Help
            </span>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"/login"}
            onClick={() => handleItemClick(5)}
          >
            <span className={`navItem ${selected === 5 ? "active" : ""}`}>
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
