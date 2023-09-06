import { Layer, Line, Stage } from "react-konva";
import { useWindowResizeEffect } from "../../hooks/useWindowResizeEffect";
import { useState } from "react";
import { Token } from "./Token";

type GridProps = {
  cellSizePx: number;
  scale?: number;
};

// Creates a grid that is made up of cells of size cellSize that fits
// the entire canvas
export const Grid = ({ cellSizePx, scale = 1 }: GridProps) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useWindowResizeEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });

  const horizontalLines = [];
  const verticalLines = [];

  const cellSize = cellSizePx * scale;

  for (let i = 0; i < window.innerWidth / cellSize; i++) {
    horizontalLines.push(
      <Line
        key={i}
        points={[i * cellSize, 0, i * cellSize, window.outerHeight]}
        stroke="black"
        strokeWidth={1}
      />
    );
  }

  for (let i = 0; i < window.innerHeight / cellSize; i++) {
    verticalLines.push(
      <Line
        key={i}
        points={[0, i * cellSize, window.outerWidth, i * cellSize]}
        stroke="black"
        strokeWidth={1}
      />
    );
  }

  const tokens = [<Token cellSize={cellSize} scale={scale} />];

  return (
    <Stage width={dimensions.width} height={dimensions.height}>
      <Layer draggable>
        {horizontalLines}
        {verticalLines}
        {tokens}
      </Layer>
    </Stage>
  );
};
