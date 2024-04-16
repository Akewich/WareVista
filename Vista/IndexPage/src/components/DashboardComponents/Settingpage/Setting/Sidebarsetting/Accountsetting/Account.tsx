import { Image } from "react-bootstrap";
import Sidebar from "../../../../Sidebar";
import Sidesetting from "../Sidesetting";
import user from "../../../../../../Images/profile.png";
import "./Account.scss";
const Account = () => {
  return (
    <div className="sideAccount">
      <Sidebar />
      <div className="settingList">
        <Sidesetting />
      </div>
      <div className="accountText ">
        <span>Account</span>

        <div className="accountContent ">
          <p className="name">Profile</p>
          <Image src={user} width={70} height={70} />
        </div>
        <div className="userAccount">
          <div className="box1">
            First name
            <p className="userText">Firstname</p>
          </div>
          <div className="box2">
            Last name
            <p className="userText">Lastname</p>
          </div>
          <div className="box3">
            Email Address
            <p className="userText">email</p>
          </div>
          <div className="box4">
            Phone number
            <p className="userText">080-xxx-xxxx</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
