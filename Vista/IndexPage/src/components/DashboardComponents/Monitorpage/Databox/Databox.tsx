import "./Databox.scss";
import Firstdata from "../FirstData/Firstdata";
import Seconddata from "../SecondData/Seconddata";
const Databox = () => {
  return (
    <div className="monitor d-flex">
      <div className="dataBox">
        <div className="box box1">
          <Firstdata />
        </div>
        <div className="box box2">
          <Seconddata />
        </div>
        <div className="box box3">Data3</div>
        <div className="box box4">Data4</div>
      </div>
    </div>
  );
};

export default Databox;
