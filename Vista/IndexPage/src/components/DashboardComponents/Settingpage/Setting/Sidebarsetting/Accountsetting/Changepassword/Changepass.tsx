import Sidebar from "../../../../../Sidebar";
import Sidesetting from "../../Sidesetting";
import "./Changepass.scss";
import { Button } from "@mui/material";

const Changepass = () => {
  return (
    <div className="sideAccount">
      <Sidebar />
      <div className="settingList">
        <Sidesetting />
      </div>
      <div className="changeText">
        <span>Change Password</span>
        <div className="userChange">
          <div className="box">Old Passoword</div>
          <input type="password" className="formPassword" />
          <div className="box">Confirm Password</div>
          <input type="password" className="formPassword" />
          <div className="box">New Passoword</div>
          <input type="password" className="formPassword" />
          <Button
            type="submit"
            className="submit "
            variant="contained"
            color="warning"
            style={{ color: "black" }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Changepass;
