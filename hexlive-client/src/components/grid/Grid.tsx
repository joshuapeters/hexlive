import { Layer, Line, Stage, Image } from "react-konva";
import { useWindowResizeEffect } from "../../hooks/useWindowResizeEffect";
import { useState } from "react";
import { Token } from "./tokens/Token";
import { useGridStore } from "./GridStore";
import useImage from "use-image";

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

  // TODO: save/load maps from server
  const [image] = useImage(
    "https://i.etsystatic.com/18388031/r/il/948be0/4031430605/il_1588xN.4031430605_4g2u.jpg"
  );

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
        x: 20,
        y: 20,
      }}
    />,
  ];

  return (
    <Stage
      width={image?.width ?? dimensions.width}
      height={image?.height ?? dimensions.height}>
      <Layer>
        <Image image={image} />
      </Layer>
      <Layer>
        {horizontalLines}
        {verticalLines}
      </Layer>
      <Layer>{tokens}</Layer>
    </Stage>
  );
};
