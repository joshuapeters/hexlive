import Konva from "konva";
import { useState } from "react";
import { Layer, Rect, Stage } from "react-konva"
import styled from "styled-components";

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  z-index: 1;
  padding: 1rem 2rem;
  background-color: aliceblue;
  margin-left: 2rem;
  margin-top: 2rem;
`;

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const StyledStage = styled(Stage)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
`;

const ColoredRect = () => {
  const [color, setColor] = useState('green');

  const handleClick = () => {
    setColor(Konva.Util.getRandomColor());
  };

  return (
    <Rect
      x={100}
      y={100}
      width={50}
      height={50}
      fill={color}
      shadowBlur={5}
      onClick={handleClick}
      draggable
    />
  );
};

function App() {
  return (
    <>
      <CanvasContainer>
        <StyledStage width={window.outerWidth} height={window.outerWidth}>
          <Layer draggable>
            <ColoredRect />
          </Layer>
        </StyledStage>
      </CanvasContainer>
      <ContentContainer>
        <p style={{ color: "black" }}>hello</p>
      </ContentContainer>
    </>
  )
}

export default App
