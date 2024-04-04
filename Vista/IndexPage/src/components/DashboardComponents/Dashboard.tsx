import Sidebar from "./Sidebar";
import Homedash from "./Homedash";
import Profile from "./Profile";
import "./Dashboard.css";
function Dashboard() {
  return (
    <div>
      <div className="dashBoard">
        <Sidebar />
        <div className="dashBoardContent">
          <Homedash />
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
