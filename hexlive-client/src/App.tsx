// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from "styled-components";
import { Grid } from "./components/konva/Grid";
import { useState } from "react";
import { Slider } from "./components/ui-elements/Slider";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  padding: 1rem 2rem;
  background-color: grey;
  margin-left: 2rem;
  margin-top: 2rem;
  border-radius: 5px;
`;

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

function App() {
  const [scale, setScale] = useState(1);

  return (
    <CanvasContainer>
      <ContentContainer>
        <p>Scale</p>
        <Slider onValueChange={setScale} />
      </ContentContainer>
      <Grid cellSizePx={50} scale={scale} />
    </CanvasContainer>
  );
}

export default App;
