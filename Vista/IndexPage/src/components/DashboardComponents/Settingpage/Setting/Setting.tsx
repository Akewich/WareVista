import Sidebar from "../../Sidebar";
import "./Setting.scss";
import Sidesetting from "./Sidebarsetting/Sidesetting";

const Setting = () => {
  return (
    <div className="setting">
      <Sidebar />
      <div className="sidebarSetting">
        <Sidesetting />
      </div>
    </div>
  );
};

export default Setting;
