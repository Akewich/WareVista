import Navdesign from "../NavDesign/Navdesign";
import Rightbar from "../Rightsidebar/Rightbar";
import Designer from "../Designer/Designer";
import "./Warehouse.scss";
import Leftbar from "../SidebarDesign/Leftbar";

const Warehouse = () => {
  return (
    <main className="warehouse ">
      <Navdesign />
      <section className="sidebarDesign">
        <Leftbar />
        <Designer />
        <Rightbar />
      </section>
    </main>
  );
};

export default Warehouse;
