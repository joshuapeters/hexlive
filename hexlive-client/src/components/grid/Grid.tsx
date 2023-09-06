import { Layer, Line, Stage } from "react-konva";
import { useWindowResizeEffect } from "../../hooks/useWindowResizeEffect";
import { useState } from "react";
import { Token } from "./tokens/Token";
import { useGridStore } from "./GridStore";

// Creates a grid that is made up of cells of size cellSize that fits
// the entire canvas
export const Grid = () => {
  const { cellSizeScaled: cellSize } = useGridStore((state) => ({
    scale: state.scale,
    cellSizeScaled: state.cellSizeScaled,
  }));

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

  const tokens = [
    <Token
      position={{
        x: 10,
        y: 10,
      }}
    />,
  ];

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
