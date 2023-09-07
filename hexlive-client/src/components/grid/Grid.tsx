import { Layer, Line, Stage, Image } from "react-konva";
import { useWindowResizeEffect } from "../../hooks/useWindowResizeEffect";
import { useLayoutEffect, useState } from "react";
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

  const [horizontalLines, setHorizontalLines] = useState<JSX.Element[]>([]);
  const [verticalLines, setVerticalLines] = useState<JSX.Element[]>([]);

  const width = image?.width ?? dimensions.width;
  const height = image?.height ?? dimensions.height;

  console.log("image width", image?.width);
  console.log("image height", image?.height);

  console.log("dimensions width", dimensions.width);
  console.log("dimensions height", dimensions.height);

  console.log("width", width);
  console.log("height", height);

  useLayoutEffect(() => {
    const yLines = [];
    const xLines = [];

    for (let i = 0; i < width / cellSize; i++) {
      yLines.push(
        <Line
          key={i}
          points={[i * cellSize, 0, i * cellSize, width]}
          stroke="black"
          strokeWidth={1}
        />
      );
    }

    for (let i = 0; i < height / cellSize; i++) {
      xLines.push(
        <Line
          key={i}
          points={[0, i * cellSize, width, i * cellSize]}
          stroke="black"
          strokeWidth={1}
        />
      );
    }

    setHorizontalLines(yLines);
    setVerticalLines(xLines);
  }, [cellSize, height, width]);

  const tokens = [
    <Token
      key="token1"
      position={{
        x: 20,
        y: 20,
      }}
    />,
  ];

  return (
    <Stage width={width} height={height}>
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
