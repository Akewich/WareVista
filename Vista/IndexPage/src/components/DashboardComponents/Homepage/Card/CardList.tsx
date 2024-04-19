import "./Card.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import { useState } from "react";

const CardList = (props: any) => {
  const [liked, setLiked] = useState(false);

  const handleLikedClick = () => {
    setLiked(!liked); // Toggle the liked state
  };

  return (
    <>
      <div className="blog">
        <img src={props.img} className="propImg" />
        <div className="cardText">
          <span>{props.name}</span>
          <IconButton
            onClick={handleLikedClick}
            className="iconBtn ms-2"
            sx={{ fontSize: "17px" }}
          >
            {/* {liked ? <FavoriteIcon className="icon" /> : <FavoriteBorderIcon />}{" "} */}
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default CardList;
