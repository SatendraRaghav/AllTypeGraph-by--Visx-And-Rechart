import React from "react";
;
import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
  Tooltip
} from "@visx/xychart";

const accessors = { xAccessor: (d) => d.x, yAccessor: (d) => d.y };
const Product1 = [
  { x: "a", y: 8 },
  { x: "b", y: 1.5 },
  { x: "c", y: 2.6 },
  { x: "d", y: 4 },
  { x: "e", y: 12 },
  { x: "f", y: 2 },
  { x: "g", y: 1.9 },
  { x: "h", y: 6 },
  { x: "i", y: 7.1 },
  { x: "j", y: 0.2 },
  { x: "k", y: 0.8 },
  { x: "l", y: 4 },
  { x: "m", y: 2.1 },
  { x: "n", y: 7.2 },
  { x: "o", y: 7.9 },
  { x: "p", y: 1.9 },
  { x: "q", y: 0.2 },
  { x: "r", y: 6 },
  { x: "s", y: 6.5 },
  { x: "t", y: 9.5 },
  { x: "u", y: 2.8 },
  { x: "v", y: 0.7 },
  { x: "w", y: 2.1 },
  { x: "x", y: 0.3 },
  { x: "y", y: 1.8 },
  { x: "z", y: 0.1 }
];

const DrawMixGraph = ({ width }) => {
  return (
    <XYChart
      height={150}
      width={width}
      xScale={{ type: "band" }}
      yScale={{ type: "linear" }}
    >
      {/* <AnimatedAxis orientation="left" /> */}
      <AnimatedAxis orientation="bottom" />
      <AnimatedGrid columns={false} numTicks={0} />
      <AnimatedLineSeries
        dataKey="Kotak Project"
        data={Product1}
        {...accessors}
      />

      <Tooltip
        snapTooltipToDatumX
        snapTooltipToDatumY
        showVerticalCrosshair
        showSeriesGlyphs
        renderTooltip={({ tooltipData, colorScale }) => (
          <div>
            <div style={{ color: colorScale(tooltipData.nearestDatum.key) }}>
              {tooltipData.nearestDatum.key}
            </div>
            {accessors.xAccessor(tooltipData.nearestDatum.datum)}
            {", "}
            {accessors.yAccessor(tooltipData.nearestDatum.datum)}
          </div>
        )}
      />
    </XYChart>
  );
};

export default DrawMixGraph;
