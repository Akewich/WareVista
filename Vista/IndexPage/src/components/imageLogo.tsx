import React from "react";
import Logo from "../Images/WareHouseLOGO.png";
import Image from "react-bootstrap/Image";

const ImageLogo: React.FC = () => {
  return (
    <div className="logo">
      <Image src={Logo} alt="" fluid width={755} height={735} />
    </div>
  );
};

export default ImageLogo;
