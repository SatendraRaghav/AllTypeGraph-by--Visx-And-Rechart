import React from 'react'
import BarChartRechart from './BarChartRechart/BarChartRechart'
import LineChartRechart from './LineChartRechart/LineChartRechart'
import MixBarLineGraphRechart from './MixGraphRechart/MixBarLineGraphRechart'
import Mix_b_L_A_GraphRechart from './MixGraphRechart/Mix_b_L_A_GraphRechart'
import PieGraphRechart from './PieGraph/PieGraphRechart'

const Recharts = () => {
  return (
    <div>
        <LineChartRechart /> 
         <BarChartRechart />
        <PieGraphRechart />
       <MixBarLineGraphRechart />
       <Mix_b_L_A_GraphRechart />
    </div>
  )
}

export default Recharts