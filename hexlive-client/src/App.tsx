// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from "styled-components";
import { Grid } from "./components/grid/Grid";
import { Slider } from "./components/ui-elements/Slider";
import { useGridStore } from "./components/grid/GridStore";

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
  const setScale = useGridStore((state) => state.setScale);

  return (
    <CanvasContainer>
      <ContentContainer>
        <p>Scale</p>
        <Slider onValueChange={setScale} />
      </ContentContainer>
      <Grid />
    </CanvasContainer>
  );
}

export default App;
