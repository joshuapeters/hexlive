import { Slider } from "@radix-ui/themes";

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
      step={0.001}
      onValueChange={(value: number[]) => onValueChange(value[0])}>
      <StyledTrack>
        <StyledRange />
      </StyledTrack>
      <StyledThumb aria-label="Volume" />
    </StyledSlider>
  );
};
