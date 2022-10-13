import React from 'react';
import { ResponsiveContainer,Legend,LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip} from 'recharts';
import { data } from '../RechartData';

const LineChartRechart = () => {
  return (
    <div className="LineChartRechartContainer">
      <h1 style={{textAlign:"center",textDecoration:"underline"}}>Line Chart</h1>
        <ResponsiveContainer width={"100%"} aspect={2}>
         <LineChart data={data} margin={{top:5,right:25,left:25,bottom:15}} >
          <CartesianGrid />
          <XAxis dataKey='name' interval={'preserveStartEnd'}  fontSize={"2vw"} stroke="black"/>
          <YAxis  stroke='white' fontSize={"2vw"}/>
          <Legend />
          <Tooltip contentStyle={{backgroundColor:"#D2C9F5",border:"none",borderRadius:"5px"}} />
           <Line type="monotone" dataKey='student'  stroke="green" activeDot={{r:8}}/>
            <Line type="monotone" dataKey='fees' stroke="red" activeDot={{r:8}}/>
         </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default LineChartRechart