import React, { useState } from "react";
import BarGraph from "../BarGraph/BarGraph";
import LineGraph from "../LineGraph/LineGraph";
import DrawMixGraph from "./DrawMixGraph";
import { ParentSize } from "@visx/responsive";
import Graph from "../BarGraph/Graph";

const MixGraph = () => {
  const [width, setWidth] = useState();
  let demo = (
    <ParentSize>
      {(parent) => {
        setWidth(parent.width);
      }}
    </ParentSize>
  );
  let MixBarGraphRender = (
    <ParentSize>
      {(parent) => (
        <Graph
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

  // let MixLineGraphRender = (
  //   <ParentSize>
  //     {(parent) => (
  //       <DrawMixGraph
  //         parentWidth={parent.width}
  //         parentHeight={400}
  //         parentTop={15}
  //         parentLeft={15}
  //         // this is the referer to the wrapper component
  //         parentRef={parent.ref}
  //         // this function can be called inside MySuperCoolVisxChart to cause a resize of the wrapper component
  //         resizeParent={parent.resize}
  //       />
  //     )}
  //   </ParentSize>
  // );

  return (
    <div class="mixGraphContainer">
      <div className="firstMixGraph">
        <DrawMixGraph width={width} />
      </div>
      <div className="secondtMixGraph">{MixBarGraphRender}</div>
    </div>
  );
};

export default MixGraph;
