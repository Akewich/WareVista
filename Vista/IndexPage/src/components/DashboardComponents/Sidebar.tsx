import imageLogo from "../../Images/WareHouseLOGO.png";
import { Image } from "react-bootstrap";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { Sidebarmenu } from "../data";

function Sidebar() {
  return (
    <>
      <div className="sideMenu p-2">
        <Link to={"/"}>
          <div className="sideBarLogo">
            <Image src={imageLogo} fluid width={100} height={100} />
          </div>
        </Link>
        <div className="sideList pt-3">
          {Sidebarmenu.map((item, index) => {
            return (
              <Link
                to={item.url}
                style={{ color: "black", textDecoration: "none" }}
                key={index}
              >
                <div className="navItem active">
                  <item.icon />
                  <span className="navList">{item.title}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
