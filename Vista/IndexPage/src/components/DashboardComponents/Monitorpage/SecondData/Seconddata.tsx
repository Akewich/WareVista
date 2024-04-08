import { ResponsiveContainer, Pie, PieChart, Cell, Tooltip } from "recharts";
import "./Seconddata.scss";
const data = [
  {
    name: "Car ",
    use: 41,
    color: "#93C4FD",
  },
  {
    name: "Automobile system",
    use: 9,
    color: "#A9BDF9",
  },
  {
    name: "Engine System",
    use: 30,
    color: "#F09A63",
  },
  {
    name: "Electrical System",
    use: 15,
    color: "#FF8042",
  },
  {
    name: "Car Body ",
    use: 5,
    color: "#0088FE",
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
