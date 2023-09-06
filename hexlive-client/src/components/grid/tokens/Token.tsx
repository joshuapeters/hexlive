import { Circle } from "react-konva";
import { useGridStore } from "../GridStore";

const TOKEN_SIZE_MODIFIER = 10;

type TokenProps = {
  position: {
    x: number;
    y: number;
  };
};

export const Token = ({ position }: TokenProps) => {
  const { cellSize, scale } = useGridStore((state) => ({
    cellSize: state.cellSizeScaled,
    scale: state.scale,
  }));

  const tokenSize = cellSize - TOKEN_SIZE_MODIFIER * scale;
  const cellSizeHalved = cellSize / 2;

  const positionX = position.x * cellSize - cellSizeHalved;
  const positionY = position.y * cellSize - cellSizeHalved;

  return (
    <Circle
      stroke="black"
      fill="grey"
      width={tokenSize}
      height={tokenSize}
      x={positionX}
      y={positionY}
      onDragEnd={(e) => console.log(e.target.x(), e.target.y())}
      draggable
    />
  );
};
