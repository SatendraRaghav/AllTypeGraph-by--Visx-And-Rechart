import React from "react";
import { letterFrequency } from "@visx/mock-data";
import { Group } from "@visx/group";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { Bar,AreaClosed } from "@visx/shape";
import { scaleLinear, scaleBand } from "@visx/scale";
import { useTooltip, useTooltipInPortal } from "@visx/tooltip";
import {
  AnimatedLineSeries,
  XYChart,
  Tooltip
} from "@visx/xychart";

const NewBarLineGraph = ({ parentWidth, parentHeight, parentLeft, parentTop }) => {
    const {
        showTooltip,
        hideTooltip
      } = useTooltip();
      const { containerRef } = useTooltipInPortal({
        detectBounds: true,
        scroll: true
      });
      const data = letterFrequency.slice(0, 26);
      const data2 = letterFrequency.map((elem) => {
        return { x: elem.letter, y: elem.frequency * 100 }
      })
      const accessors = { xAccessor: (d) => d.x, yAccessor: (d) => d.y };
    
      const font = parentWidth > 240 ? parentWidth / 80 : "5px";
      const xMax = parentWidth - 5 * parentLeft;
      const yMax = parentHeight - parentTop * 2;
      const x = (d) => d.letter;
      const y = (d) => +d.frequency * 100;
      const xScale = scaleBand({
        range: [0, xMax],
        round: true,
        domain: data.map(x),
        padding: 0.4,
      });
    
      const yScale = scaleLinear({
        range: [yMax, 70],
        round: false,
        domain: [0, Math.max(...data.map(y))]
      });
      function compose(scale, accessor) {
        return (data) => scale(accessor(data));
      }
      const xPoint = compose(xScale, x);
    
      const yPoint = compose(yScale, y);
      return (
        <>
            
    
          <div className="newLineConatiner">
            
            <XYChart height={parentHeight} width={parentWidth} xScale={{ type: "band" }} yScale={{ type: "linear" }}>
              <AnimatedLineSeries
                dataKey="MAMA New Project"
                data={data2}
                {...accessors}
                stroke={"black"}
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
                    {x(tooltipData.nearestDatum.datum)}
                    {", "}
                    {y(tooltipData.nearestDatum.datum)}
                  </div>
                )}
              />
            </XYChart>
          </div>
          <svg
            ref={containerRef}
            className="newBarContainer"
            width={parentWidth}
            height={parentHeight}
          >
            <Group left={40} top={-20} >
              <AxisLeft
                scale={yScale}
    
                numTicks={10}
                top={0}
                label="Spend Hours"
                tickLabelProps={(e) => ({
                  fill: "#ff0b3b",
                  fontSize: font,
                  textAnchor: "end",
                  x: -10,
                  y: yScale(e) ?? 0
                })}
              />
              {data.map((d, i) => {
                const barHeight = yMax - yPoint(d);
                const fillBarColor =
                  barHeight < 40 ? "red" : barHeight > 100 ? "green" : "white";
                return (
                  <>
                    <Bar
                      key={`bar-${barHeight}`}
    
                      x={d === 1 ? 40 : xPoint(d)}
                      y={yMax - barHeight}
                      height={barHeight}
                      width={xScale.bandwidth()}
    
                      fill={fillBarColor}
                    />
                    <circle
                      key={`circle-${barHeight}`}
                      r={6}
                      cx={xScale(x(d)) + xScale.bandwidth() / 2}
    
                      cy={yScale(y(d))}
                      stroke="rgba(33,133,233,0.9)"
                      fill="black"
                    />
                  </>
                );
              })}
    
              <AxisBottom
                numTicks={data.length}
                top={yMax}
                scale={xScale}
                label="Name of Employee"
                tickLabelProps={() => ({
                  fill: "#ff0b3b",
                  fontSize: font,
                  textAnchor: "middle"
                })}
              />
            </Group>
          </svg>
        </>
      );
}

export default NewBarLineGraph;