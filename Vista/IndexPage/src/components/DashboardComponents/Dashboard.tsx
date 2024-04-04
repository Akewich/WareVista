import Sidebar from "./Sidebar";
import "./Dashboard.css";
import Homedash from "./Homedash";
import Profile from "./Profile";
function Dashboard() {
  return (
    <div className="dashBoard">
      <Sidebar />
      <div className="dashBoardContent">
        <Homedash />
        <Profile />
      </div>
    </div>
  );
}

export default Dashboard;
