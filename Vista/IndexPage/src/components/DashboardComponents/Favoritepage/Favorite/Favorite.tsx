import { files } from "../../../data";
import CardList from "../../Homepage/Card/CardList";
import { ThemeContextProvider } from "../../Settingpage/Setting/Sidebarsetting/Themes/indexTheme";
import Sidebar from "../../Sidebar";
import "./Favorite.scss";

const Favorite = () => {
  const card = files.map((item) => {
    return <CardList img={item.img} name={item.name} />;
  });
  return (
    <>
    <ThemeContextProvider> 

    <div className="favorite">
      <Sidebar />
      <div className="favoriteContent">
        <h2>Favourite</h2>
        <div className="boxFav">{card}</div>
      </div>
    </div>
    </ThemeContextProvider>
    </>
  );
};

export default Favorite;
