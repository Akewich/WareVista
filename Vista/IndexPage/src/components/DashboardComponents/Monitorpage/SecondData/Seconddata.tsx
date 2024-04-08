import {
  ResponsiveContainer,
  Pie,
  PieChart,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import "./Seconddata.scss";
const data = [
  {
    name: "Mon",
    use: 15,
    color: "#0088FE",
  },
  {
    name: "Tue",
    use: 30,
    color: "#00C49F",
  },
  {
    name: "Wed",
    use: 50,
    color: "#FFBB28",
  },
  {
    name: "Thu",
    use: 70,
    color: "#FF8042",
  },
  {
    name: "Fri",
    use: 40,
    color: "#0088FE",
  },
  {
    name: "Sat",
    use: 60,
    color: "#00C49F",
  },
  {
    name: "Sun",
    use: 80,
    color: "#FF8042",
  },
];

const Seconddata = () => {
  return (
    <div className="secondBigChart">
      <h3>Data2</h3>
      <div className="secondChartBox">
        <ResponsiveContainer width="99%" height="100%">
          <PieChart>
            <Pie data={data} outerRadius={"90%"} dataKey="use" label>
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="options">
          {data.map((item) => (
            <div className="option" key={item.name}>
              <div className="optionText">
                <div
                  className="dot"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span>{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seconddata;
