import React from 'react'
import BarChartRechart from './BarChartRechart/BarChartRechart'
import LineChartRechart from './LineChartRechart/LineChartRechart'
import PieGraphRechart from './PieGraph/PieGraphRechart'

const Recharts = () => {
  return (
    <div>
        <LineChartRechart /> 
         <BarChartRechart />
        <PieGraphRechart />
        
    </div>
  )
}

export default Recharts