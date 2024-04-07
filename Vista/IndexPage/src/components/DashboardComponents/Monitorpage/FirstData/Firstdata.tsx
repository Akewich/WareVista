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
const data = [
  {
    name: "Mon",
    use: 15,
  },
  {
    name: "Tue",
    use: 10,
  },
  {
    name: "Wed",
    use: 25,
  },
  {
    name: "Thu",
    use: 35,
  },
  {
    name: "Fri",
    use: 20,
  },
  {
    name: "Sat",
    use: 50,
  },
  {
    name: "Sun",
    use: 80,
  },
];
const Firstdata = () => {
  return (
    <div className="oneBigChart">
      <h3>Data1</h3>
      <div className="oneChartBox">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
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
