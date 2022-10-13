import React from 'react'
import BarChartRechart from './BarChartRechart/BarChartRechart'
import LineChartRechart from './LineChartRechart/LineChartRechart'

const Recharts = () => {
  return (
    <div>
        <LineChartRechart />
        <BarChartRechart />
        {/* <LineChartRechart /> */}
    </div>
  )
}

export default Recharts