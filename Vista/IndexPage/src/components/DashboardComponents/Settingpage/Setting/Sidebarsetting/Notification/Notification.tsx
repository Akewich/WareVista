import { grey } from "@mui/material/colors";
import Sidebar from "../../../../Sidebar";
import Sidesetting from "../Sidesetting";
import "./Notification.scss";
import { alpha, styled, Switch } from "@mui/material";

const BlackSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: grey[900],
    "&:hover": {
      backgroundColor: alpha(grey[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: grey[600],
  },
}));

const label = { inputProps: { "aria-label": "Color switch demo" } };

const Notification = () => {
  return (
    <div className="noti">
      <Sidebar />
      <div className="settingList">
        <Sidesetting />
      </div>
      <div className="notiContent">
        <span className="notihead">Notification</span>
        <div className="notiSwitch">
          <BlackSwitch {...label} />
          <span>Update notification</span>
          <div className="notiSwitch">
            <BlackSwitch {...label} />
            <span>Notification of Khaosan updates</span>
          </div>
          <div className="notiSwitch">
            <BlackSwitch {...label} />
            <span>Mobile push notifications</span>
            <p>Receives the all notifications via your desktop app.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
