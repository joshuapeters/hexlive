import * as RadixSlider from "@radix-ui/react-slider";
import styled from "styled-components";

const StyledSlider = styled(RadixSlider.Root)`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: 200px;
  height: 20px;
`;

const StyledTrack = styled(RadixSlider.Track)`
  background-color: black;
  position: relative;
  flex-grow: 1;
  border-radius: 9999px;
  height: 3px;
`;

const StyledRange = styled(RadixSlider.Range)`
  position: absolute;
  background-color: white;
  border-radius: 9999px;
  height: 100%;
`;

const StyledThumb = styled(RadixSlider.Thumb)`
  display: block;
  width: 20px;
  height: 20px;
  background-color: white;
  box-shadow: 0 2px 10px grey;
  border-radius: 10px;
`;

type SliderProps = {
  onValueChange: (value: number) => void;
};

export const Slider = ({ onValueChange }: SliderProps) => {
  return (
    <StyledSlider
      className="SliderRoot"
      defaultValue={[1]}
      max={1.5}
      min={0.5}
      step={0.01}
      onValueChange={(value: number[]) => onValueChange(value[0])}>
      <StyledTrack>
        <StyledRange />
      </StyledTrack>
      <StyledThumb aria-label="Volume" />
    </StyledSlider>
  );
};
