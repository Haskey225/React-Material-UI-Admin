import { useEffect, useState } from "react";
import "./chart.scss"
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getMemberGraphDetails } from "../../function/data";


// const data = [
//   {id: 1, name: "Avril", Total: 2},
//   { name: "Mai", Total: 1},
//   { name: "Juin", Total: 0},
//   { name: "Juillet", Total: 0},
//   { name: "Aout", Total: 0},
//   { name: "Septempbre", Total: 0},
// ];

const Chart = ({ aspect, title }) => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    getMemberGraphDetails().then(data=>{
      setData(data)
    })
  }, [])
  return (
    <div className='chart'>
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
