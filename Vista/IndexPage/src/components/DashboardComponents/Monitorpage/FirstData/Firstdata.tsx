import {
  AreaChart,
  CartesianGrid,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import "./Firstdata.scss";
import { areaChart } from "../../../data";

const Firstdata = () => {
  return (
    <div className="oneBigChart">
      <h3>Data1</h3>
      <div className="oneChartBox">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={areaChart}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Area
              type="monotone"
              dataKey="use"
              stroke="#0E9CFF"
              activeDot={{ r: 8 }}
              fill="#c4e0f4"
            />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Firstdata;
