import "./Card.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const CardList = (props: any) => {
  const [liked, setLiked] = useState(false);

  const handleLikedClick = () => {
    setLiked(!liked); // Toggle the liked state
  };

  return (
    <>
      <div className="blog">
        <Link to={"/design"}>
          <img src={props.img} className="propImg" />
        </Link>
        <div className="cardText">
          <span className="projectName">{props.name}</span>
          <IconButton
            onClick={handleLikedClick}
            className="iconBtn ms-2"
            sx={{ fontSize: "17px" }}
          >
            {liked ? <FavoriteIcon className="icon" /> : <FavoriteBorderIcon />}{" "}
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default CardList;
