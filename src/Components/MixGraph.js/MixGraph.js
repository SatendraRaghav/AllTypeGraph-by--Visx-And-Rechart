import React, { useState } from "react";
import DrawBarGraph from '../BarGraph/DrawBarGraph'
import { ParentSize } from "@visx/responsive";
import DrawMixGraph from "./DrawMixGraph";

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
        <DrawBarGraph
          parentWidth={parent.width}
          parentHeight={200}
          parentTop={15}
          parentLeft={15}
          parentRef={parent.ref}
          resizeParent={parent.resize}
        />
      )}
    </ParentSize>
  );


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
