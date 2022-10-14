import React, { useState } from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip,LabelList } from 'recharts'
import { data } from '../RechartData'

const PieGraphRechart = () => { 
  const [render,setRender] = useState(false);
  let colors = ["blue","tomato","#FF005D","green","yellow","red"];
  const data2 = data.map((elem)=>{
     return {...elem,l:elem.name[0]}
  })

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
       <PieChart >      
        <Pie  data={data2} dataKey={'fees'}  cx='50%'
         cy="50%" outerRadius={60}  >
          {
            data.map((entry,index)=>(
              <Cell key ={index} fill={colors[index]} onMouseOut={()=>mouseOutHandler()} onMouseOver={(entry)=>mouseOverHandler(entry)}></Cell>
            ))
          }
            <LabelList dataKey="l" position={"middle"} offset={-2} fontSize={"8px"} stroke="black" /> 
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