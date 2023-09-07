// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from "styled-components";
import { Grid } from "./components/grid/Grid";
import { useGridStore } from "./components/grid/GridStore";
import { Card, Flex, Box, Text, Slider } from "@radix-ui/themes";

const ContentContainer = styled(Flex)`
  padding: 1rem 2rem;
  margin-left: 2rem;
  margin-top: 2rem;
  top: 0;
`;

const CanvasContainer = styled(Box)`
  width: 100%;
  height: 100%;
`;

function App() {
  const setScale = useGridStore((state) => state.setScale);

  return (
    <CanvasContainer position="relative">
      <Grid />
      <ContentContainer direction="column" position="absolute">
        <Card size="2" style={{ width: 350 }}>
          <Text weight="medium">Scale</Text>
          <Slider
            variant="soft"
            defaultValue={[1]}
            onValueChange={(value: number[]) => setScale(value[0])}
            max={1.5}
            min={0.5}
            step={0.001}
          />
        </Card>
      </ContentContainer>
    </CanvasContainer>
  );
}

export default App;
