import {
  AreaChart,
  CartesianGrid,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import "./Seconddata.scss";
const data = [
  {
    name: "Mon",
    use: 15,
  },
  {
    name: "Tue",
    use: 30,
  },
  {
    name: "Wed",
    use: 50,
  },
  {
    name: "Thu",
    use: 70,
  },
  {
    name: "Fri",
    use: 40,
  },
  {
    name: "Sat",
    use: 60,
  },
  {
    name: "Sun",
    use: 80,
  },
];
const Seconddata = () => {
  return (
    <div className="secondBigChart">
      <h3>Data2</h3>
      <div className="secondChartBox">
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

export default Seconddata;
