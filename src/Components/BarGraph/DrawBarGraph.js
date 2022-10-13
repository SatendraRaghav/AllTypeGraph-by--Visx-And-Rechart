import React from "react";
import { letterFrequency } from "@visx/mock-data";
import { Group } from "@visx/group";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { Bar } from "@visx/shape";
import { scaleLinear, scaleBand } from "@visx/scale";
import { useTooltip, useTooltipInPortal } from "@visx/tooltip";
import { localPoint } from "@visx/event";

const DrawBarGraph = (props) => {
  const {
    tooltipData,
    tooltipLeft,
    tooltipTop,
    tooltipOpen,
    showTooltip,
    hideTooltip
  } = useTooltip();
  const { containerRef, TooltipInPortal } = useTooltipInPortal({
    detectBounds: true,
    scroll: true
  });
  const handleMouse = (event, datum) => {
    console.log(`datum - ${datum}`);
    const coords = localPoint(event.target.ownerSVGElement, event);
    showTooltip({
      tooltipLeft: coords.x,
      tooltipTop: coords.y,
      tooltipData: datum.letter
    });
  };
  const data = letterFrequency.slice(0, 26);

  const { parentWidth, parentHeight, parentLeft, parentTop } = props;
  const font = parentWidth > 240 ? parentWidth / 80 : "5px";
  const xMax = parentWidth - 5 * parentLeft;
  const yMax = parentHeight - parentTop * 2;
  const x = (d) => d.letter;
  const y = (d) => +d.frequency * 100;
  const xScale = scaleBand({
    range: [0, xMax],
    round: true,
    domain: data.map(x),
    padding: 0.4
  });

  const yScale = scaleLinear({
    range: [yMax, 0],
    round: true,
    domain: [0, Math.max(...data.map(y))]
  });
  function compose(scale, accessor) {
    return (data) => scale(accessor(data));
  }
  const xPoint = compose(xScale, x);

  // console.log(xPoint( );

  const yPoint = compose(yScale, y);
  return (
    <>
      <svg
        ref={containerRef}
        className="BarGraphContainer"
        width={parentWidth}
        height={parentHeight}
      >
        <Group left={70} top={-35}>
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
                  x={xPoint(d)}
                  y={yMax - barHeight}
                  height={barHeight}
                  width={xScale.bandwidth()}
                  fill={fillBarColor}
                  onMouseOver={(e) => handleMouse(e, d)}
                  onMouseOut={hideTooltip}
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
      {tooltipOpen && (
        <TooltipInPortal
          key={Math.random()}
          top={tooltipTop}
          left={tooltipLeft}
        >
          {tooltipData}
        </TooltipInPortal>
      )}
    </>
  );
};

export default DrawBarGraph;
