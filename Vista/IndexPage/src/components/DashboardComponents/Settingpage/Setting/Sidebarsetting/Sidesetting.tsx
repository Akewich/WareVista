import { Link } from "react-router-dom";
import "./Sidesetting.scss";
const Sidesetting = () => {
  return (
    <div>
      <div className="sideSetting">
        <div className="settingList ">
          <Link
            className="settingItems"
            to={"/account"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <span>Account</span>
          </Link>
          <Link
            className="settingItems"
            to={"/theme"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <span>Theme</span>
          </Link>
          <Link
            className="settingItems"
            to={"/noti"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <span>Notification</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidesetting;
