import React from 'react'
import { BarChart,Line,Bar,Tooltip,Pie,Legend,Area, ResponsiveContainer,Label, LabelList,XAxis, YAxis, CartesianGrid, Cell, ComposedChart } from 'recharts'
import { data } from '../RechartData'

const Mix_b_L_A_GraphRechart = () => {
  return (
         <div className='MixGraphRechartContainer'>
      <h1 style={{textAlign:"center",textDecoration:"underline"}}>Mix Bar-Line-Area--Rechart</h1>
        <ResponsiveContainer width={"100%"} height={320}>
            <ComposedChart
            data={data}
            height={350}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey='name' stroke='blue'  fontSize={"1.5vw"} >
              </XAxis>
              <YAxis stroke='blue' />
              <Tooltip  contentStyle={{backgroundColor:"#D2C9F5"}}/>
              <Legend />
              <Bar dataKey='fees'  startOffset="none" top={120} barSize={25}> 
              <LabelList dataKey="name" position="top" offset={-2} fontSize={"3vw"} stroke="gray" />
              {
                data.map((elem)=>{
                   let color = elem.fees>25?"green":"red";
                  return (
                  <Cell  fill={color}></Cell>
                )})
              }
              </Bar>
              <Line dataKey="fees" type="monotone" stroke='black'/>
              <Area dataKey={"fees"} />
              </ComposedChart>
        </ResponsiveContainer>
    
    </div>
  )
}

export default Mix_b_L_A_GraphRechart