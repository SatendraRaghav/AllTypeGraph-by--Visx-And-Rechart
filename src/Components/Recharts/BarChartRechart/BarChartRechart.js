
import React from 'react'
import { BarChart,Bar,Tooltip,Legend, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from 'recharts'
import { data } from '../RechartData'

const BarChartRechart = () => {
  return (
    <div className='BarChartRechartContainer'>
      <h1 style={{textAlign:"center",textDecoration:"underline"}}>Bar Chart</h1>
        <ResponsiveContainer width={"100%"} aspect={2}>
          
            <BarChart data={data}  >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey='name' stroke='blue' />
              <YAxis stroke='blue'/>
              <Tooltip  contentStyle={{backgroundColor:"#D2C9F5"}}/>
              <Legend />
              <Bar dataKey='fees' fill="#7069FF" startOffset="none"/>
            </BarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default BarChartRechart