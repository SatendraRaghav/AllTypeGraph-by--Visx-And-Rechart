import React from "react";
import DrawPieGraph from "./DrawPieGraph";
import { ParentSize } from "@visx/responsive";

let PieRender = (
  <ParentSize>
    {(parent) => (
      <DrawPieGraph
        parentWidth={parent.width}
        parentHeight={200}
        parentTop={15}
        parentLeft={15}
        // this is the referer to the wrapper component
        parentRef={parent.ref}
        // this function can be called inside MySuperCoolVisxChart to cause a resize of the wrapper component
        resizeParent={parent.resize}
      />
    )}
  </ParentSize>
);

const PieGraph = () => {
  return <div>
     <h1 style={{textAlign:"center",textDecoration:"underline"}}>Pie Chart By Visx</h1>
    {PieRender}</div>;
};

export default PieGraph;
