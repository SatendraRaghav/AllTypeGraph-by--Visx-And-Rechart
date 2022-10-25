import React from 'react'
import BarGraph from "./BarGraph/BarGraph";
import LineGraph from "./LineGraph/LineGraph";
import { ParentSize } from "@visx/responsive";
import MixGraph from "./MixGraph/MixGraph";
import NewBarLineGraph from './MixGraph/NewBarLineGraph';
import PieGraph from "./PieGraph/PieGraph";

let NewMixGraph = (
  <ParentSize>
    {(parent) => {
      return(
        <NewBarLineGraph
        parentWidth={parent.width}
        parentHeight={500}
        parentTop={15}
        parentLeft={15}
        parentRef={parent.ref}
        resizeParent={parent.resize}
      />
      )
    }}
  </ParentSize>
);

const Visx = () => {
  return (
    <div>
       <div className="newMixContainer">
      <h1 style={{textAlign:"center"}}>NEW Mix chart by visx</h1>
        {NewMixGraph}</div>
      <PieGraph />
      <BarGraph />
      <LineGraph />
      <MixGraph />
     
    </div>
  )
}

export default Visx