import { Image } from "react-bootstrap";
import profile from "../../../Images/profile.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Profile() {
  return (
    <>
      <div className="profile">
        <Image src={profile} width={50} height={50} />
        <ExpandMoreIcon />
      </div>
    </>
  );
}

export default Profile;
