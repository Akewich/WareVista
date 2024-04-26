import "./Databox.scss";
import Firstdata from "../FirstData/Firstdata";
import Seconddata from "../SecondData/Seconddata";
import { Thirddata } from "../ThirdData/Thirddata";


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
        <div className="box box3">
          <Thirddata />
        </div>

      </div>
    </div>
  );
};

export default Databox;
