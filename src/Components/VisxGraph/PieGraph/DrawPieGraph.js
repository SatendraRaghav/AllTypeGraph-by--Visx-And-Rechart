import { Group } from "@visx/group";
import { scaleOrdinal } from "@visx/scale";
import { GradientPinkBlue } from "@visx/gradient";
import { letterFrequency } from "@visx/mock-data";
import { Pie } from "@visx/shape";
import { useState } from "react";
import { Text } from "@visx/text";

const letters = letterFrequency.slice(0, 3);
const frequency = (d) => d.frequency;

const getLetterFrequencyColor = scaleOrdinal({
  domain: letters.map((l) => l.letter),
  range: ["rgba(0,250,41,1)", "rgba(200,0,31,0.9)", "rgba(25,200,205,0.6)"]
});
const defaultMargin = { top: 20, right: 20, bottom: 20, left: 20 };

const DrawPieGraph = ({ parentWidth, parentHeight, parentLeft, parentTop }) => {
  const [hover, setHover] = useState(false);
  const innerWidth = parentWidth - defaultMargin.left - defaultMargin.right;
  const innerHeight = parentHeight - defaultMargin.top - defaultMargin.bottom;
  const radius = Math.min(innerHeight, innerHeight) / 2;
  const centerX = innerWidth / 2;
  const centerY = innerHeight / 2;
  const left = centerX + defaultMargin.left;
  const top = centerY + defaultMargin.top;
  const pieSortValues = (a, b) => a - b;
  const mouseOverHandler = (arc) => {
    setHover(true);
  };
  const mouseOutHandler = (arc) => {
    setHover(false);
  };
  return (
    <svg
      width={parentWidth}
      height={parentHeight}
      className="pieGraphContainer"
    >
      <GradientPinkBlue id="visx-pie-gradient" />
      <Group top={top} left={left}>
        <Pie
          data={letters}
          pieSortValues={pieSortValues}
          pieValue={frequency}
          outerRadius={radius}
          innerRadius={radius - 50}
          cornerRadius={6}
          padAngle={0.005}
        >
          {(pie) => {
            return pie.arcs.map((arc, index) => {
              console.log(arc);
              const letter = arc.data.letter;
              const [centriodX, centriodY] = pie.path.centroid(arc);
              // const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.5;
              const arcPath = pie.path(arc);
              const arcFill = getLetterFrequencyColor(letter);
              const value = arc.value;
              return (
                <g
                  key={`arc-${letter}-${index}`}
                  onMouseOut={() => mouseOutHandler()}
                  onMouseOver={() => mouseOverHandler(arc)}
                  className="pieTooltipHolder"
                >
                  <path d={arcPath} fill={arcFill} />
                  <Text
                    x={centriodX}
                    y={centriodY}
                    dy={"0.33em"}
                    fontSize={14}
                    fill="rgba(250,250,250,0.9)"
                    textAnchor={"middle"}
                    pointerEvents={"none"}
                  >
                    {letter}
                  </Text>
                  {hover && (
                    <>
                      <Text
                        x={centriodX + 1}
                        y={centriodY + 15}
                        dy={"0.33em"}
                        fontSize={14}
                        fill="yellow"
                        textAnchor={"middle"}
                        pointerEvents={"none"}
                      >
                        {value.toFixed(2)}
                      </Text>
                    </>
                  )}
                </g>
              );
            });
          }}
        </Pie>
      </Group>
    </svg>
  );
};
export default DrawPieGraph;
