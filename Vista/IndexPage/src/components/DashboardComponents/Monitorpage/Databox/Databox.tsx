import "./Databox.scss";
import Firstdata from "../FirstData/Firstdata";
import Seconddata from "../SecondData/Seconddata";
import { Thirddata } from "../ThirdData/Thirddata";
import { Forthdata } from "../ForthData/Forthdata";
import { useState } from "react";
// import { motion, AnimateSharedLayout } from "framer-motion";

// const Card = (props: any) => {
//   const [expanded, setExpanded] = useState(false);

//   const toggleExpanded = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <motion.div layout onClick={toggleExpanded}>
//       {expanded ? (
//         <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
//       ) : (
//         <CompactCard param={props} setExpanded={() => setExpanded(true)} />
//       )}
//     </motion.div>
//   );
// };

// const ExpandedCard = ({ param, setExpanded }) => {
//   return (
//     <motion.div
//       className="expanded-card"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className="card-content">
//         {/* Your expanded card content here */}
//         {/* For example: */}
//         <h2>{param.title}</h2>
//         <p>{param.description}</p>
//       </div>
//       <button onClick={setExpanded}>Close</button>
//     </motion.div>
//   );
// };

// const CompactCard = ({ param, setExpanded }) => {
//   return (
//     <motion.div
//       className="compact-card"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className="card-content">
//         {/* Your compact card content here */}
//         {/* For example: */}
//         <h2>{param.title}</h2>
//       </div>
//       <button onClick={setExpanded}>Expand</button>
//     </motion.div>
//   );
// };

// export { ExpandedCard, CompactCard };

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
        <div className="box box4">
          <Forthdata />
        </div>
      </div>
    </div>
  );
};

export default Databox;
