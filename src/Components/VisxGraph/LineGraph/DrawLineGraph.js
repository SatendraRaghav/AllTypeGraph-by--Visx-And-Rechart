import React from "react";
// import { LegendOrdinal } from "@visx/legend";
// import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale";
import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
  Tooltip
} from "@visx/xychart";

const accessors = { xAccessor: (d) => d.x, yAccessor: (d) => d.y };
const Product1 = [
  { x: "2015", y: 200 },
  { x: "2016", y: 1200 },
  { x: "2017", y: 1500 },
  { x: "2018", y: 500 }
];
const Product2 = [
  { x: "2015", y: 700 },
  { x: "2016", y: 1000 },
  { x: "2017", y: 450 },
  { x: "2018", y: 3600 }
];
const Product3 = [
  { x: "2015", y: 200 },
  { x: "2016", y: 700 },
  { x: "2017", y: 1000 },
  { x: "2018", y: 500 }
];
const DrawGraph = () => {
  return (
    <XYChart height={300} xScale={{ type: "band" }} yScale={{ type: "linear" }}>
      <AnimatedAxis orientation="left" />
      <AnimatedAxis orientation="bottom" />
      <AnimatedGrid columns={true} numTicks={6} />
      <AnimatedLineSeries
        dataKey="Kotak Project"
        data={Product1}
        {...accessors}
      />
      <AnimatedLineSeries
        dataKey="HDFC Project"
        data={Product2}
        {...accessors}
      />
      <AnimatedLineSeries
        dataKey="MAMA New Project"
        data={Product3}
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

export default DrawGraph;
