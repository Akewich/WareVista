import { ResponsiveContainer, Pie, PieChart, Cell, Tooltip } from "recharts";
import "./Seconddata.scss";
import { pieChart } from "../../../data";

const Seconddata = () => {
  return (
    <div className="secondBigChart">
      <h3>Data2</h3>
      <div className="secondChartBox">
        <ResponsiveContainer width="99%" height="100%">
          <PieChart>
            <Pie data={pieChart} outerRadius={"90%"} dataKey="use" label>
              {pieChart.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="options">
          {pieChart.map((item) => (
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
