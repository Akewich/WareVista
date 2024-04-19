import { IconButton } from "@mui/material";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Card = ({ projectItems, onFavoriteProject }) => {
  const { id, name, img } = project;

  const [isFavorite, setIsFavorite] = useState(favorite);

  const handleFavoriteChange = () => {
    setIsFavorite((isFavorite) => !isFavorite);
    fetch("http://localhost:8080/dashboard/${id}", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ favorite: !favorite }),
    })
      .then((response) => response.json())
      .then((updateProject) => onFavoriteProject(updateProject));
  };

  return (
    <div>
      <img src={img} />
      <span>{name}</span>
      {isFavorite ? (
        <IconButton onClick={handleFavoriteChange}>
          <FavoriteBorderIcon />
        </IconButton>
      ) : (
        <IconButton onClick={handleFavoriteChange}>
          <FavoriteIcon className="icon" />
        </IconButton>
      )}
    </div>
  );
};

export default Card;
