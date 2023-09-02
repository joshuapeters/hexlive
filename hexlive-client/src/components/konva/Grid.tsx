import { Layer, Line, Stage } from "react-konva";
type GridProps = {
  cellSizePx: number;
  scale?: number;
};

// Creates a grid that is made up of cells of size cellSize that fits
// the entire canvas
export const Grid = ({ cellSizePx, scale = 1 }: GridProps) => {
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

    verticalLines.push(
      <Line
        key={i}
        points={[0, i * cellSize, window.outerWidth, i * cellSize]}
        stroke="black"
        strokeWidth={1}
      />
    );
  }

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer draggable>
        {horizontalLines}
        {verticalLines}
      </Layer>
    </Stage>
  );
};
