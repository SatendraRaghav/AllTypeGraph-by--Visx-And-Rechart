import React, { useState } from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { data } from '../RechartData'

const PieGraphRechart = () => { 
  const [render,setRender] = useState(false);
  let colors = ["blue","tomato","#FF005D","green","yellow","red"]

  const mouseOverHandler = (e)=>{
    setRender(true)
  }
  const mouseOutHandler = ()=>{
    setRender(false)
  }
  return (
    <div className='PieGraphRechart'>
        <h1 style={{textAlign:"center",textDecoration:"underline"}}>Pie Chart By Rechart</h1>
        <ResponsiveContainer height={render?250:200}  >
       <PieChart>
        <Tooltip  contentStyle={{backgroundColor:"#B6BFF2"}}/>
         
        <Pie  data={data} dataKey={'fees'}  cx='50%'
         cy="50%" outerRadius={60}   >
          {
            data.map((entry,index)=>(
              <Cell key ={index} fill={colors[index]} onMouseOut={()=>mouseOutHandler()} onMouseOver={(entry)=>mouseOverHandler(entry)}></Cell>
            ))
          }
            
         </Pie>
        
        
         {render ? (
          <>
          
          <Pie data={data} dataKey={'fees'}  cx='50%'
          cy="50%" innerRadius={70} outerRadius={90}  label>
           { data.map((entry,index)=>(
               <Cell key ={index} fill={colors[index]}  />
             ))
           }
          </Pie>
          </>
         ):(<Legend verticalAlign='bottom' height={20} />)}
        
        </PieChart>
     </ResponsiveContainer>
    </div>
  )
}

export default PieGraphRechart