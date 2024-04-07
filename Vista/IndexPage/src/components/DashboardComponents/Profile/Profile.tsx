import { Image } from "react-bootstrap";
import profile from "../../../Images/profile.png";
function Profile() {
  return (
    <>
      <div className="profile">
        <Image src={profile} width={50} height={50} />
      </div>
    </>
  );
}

export default Profile;
