import React from 'react'
import BarGraph from "./BarGraph/BarGraph";
import LineGraph from "./LineGraph/LineGraph";
import DrawMixGraph from "./MixGraph.js/DrawMixGraph";
import MixGraph from "./MixGraph.js/MixGraph";
import PieGraph from "./PieGraph/PieGraph";

const Visx = () => {
  return (
    <div>
      <PieGraph />
      <BarGraph />
      <LineGraph />
      <MixGraph />
    </div>
  )
}

export default Visx