import Sidebar from "../../Sidebar";
import Profile from "../../Profile/Profile";
import "./Maincontent.scss";
import Databox from "../Databox/Databox";
import Navmonitor from "../Navmonitor/Navmonitor";
const Maincontent = () => {
  return (
    <div className="dashBoard">
      <Sidebar />
      <div className="monitorContent">
        <div className="dashText">
          <Navmonitor />
          <Databox />
        </div>
      </div>
    </div>
  );
};

export default Maincontent;
