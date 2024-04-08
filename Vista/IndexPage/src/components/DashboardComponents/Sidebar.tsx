import imageLogo from "../../Images/WareHouseLOGO.png";
import { Image } from "react-bootstrap";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const [selected, setSelected] = useState(null);
  const handleClick = (index: any) => {
    setSelected(index);
  };

  return (
    <>
      <div className="sideMenu p-2">
        <div className="sideBarLogo">
          <Image src={imageLogo} fluid width={100} height={100} />
        </div>
        <div className="sideList pt-3">
          <div key={0} onClick={() => handleClick(0)}>
            <Link
              to={"/dashboard"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <span className={selected === 0 ? "navItem active" : "navItem"}>
                <i className="bi bi-house-fill me-2" />
                Home
              </span>
            </Link>
          </div>
          <div onClick={() => handleClick(1)} key={1}>
            <Link
              to={"/favorite"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <span className={selected === 1 ? "navItem active" : "navItem"}>
                <i className="bi bi-heart-fill me-2"></i>
                Favorite
              </span>
            </Link>
          </div>
          <div onClick={() => handleClick(2)} key={2}>
            <Link
              to={"/monitor"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <span className={selected === 2 ? "navItem active" : "navItem"}>
                <i className="bi bi-bar-chart-line me-2"></i>
                Monitor
              </span>
            </Link>
          </div>
          <div onClick={() => handleClick(3)} key={3}>
            <Link
              to={"/setting"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <span className={selected === 3 ? "navItem active" : "navItem"}>
                <i className="bi bi-gear me-2"></i>
                Setting
              </span>
            </Link>
          </div>
          <div onClick={() => handleClick(4)} key={4}>
            <Link
              to={"/help"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <span className={selected === 4 ? "navItem active" : "navItem"}>
                <i className="bi bi-question-circle me-2"></i>
                Help
              </span>
            </Link>
          </div>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"/login"}
          >
            <span
              onClick={() => handleClick(5)}
              key={5}
              className={selected === 5 ? "navItem active" : "navItem"}
            >
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
