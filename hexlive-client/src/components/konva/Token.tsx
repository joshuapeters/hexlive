import { Circle } from "react-konva";

const TOKEN_SIZE_MODIFIER = 10;
const TOKEN_POSITION_MODIFIER = 12.5;

type TokenProps = {
  cellSize: number;
  scale: number;
};

export const Token = ({ cellSize, scale }: TokenProps) => {
  const tokenSize = cellSize - TOKEN_SIZE_MODIFIER * scale;
  const tokenPositionScaleAdjustment =
    cellSize - TOKEN_POSITION_MODIFIER * scale;

  return (
    <Circle
      stroke="black"
      fill="grey"
      width={tokenSize}
      height={tokenSize}
      x={tokenPositionScaleAdjustment * 10}
      y={tokenPositionScaleAdjustment * 10}
      draggable
    />
  );
};
