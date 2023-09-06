import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";

type GridState = {
  initialCellSize: number;
  scale: number;
  cellSizeScaled: number;
};

type GridActions = {
  setScale: (scale: number) => void;
};

type GridStore = GridState & GridActions;

export const useGridStore = createWithEqualityFn<GridStore>()((set) => {
  const setScale = (scale: number) => {
    set((state) => ({ scale, cellSizeScaled: state.initialCellSize * scale }));
  };

  return {
    initialCellSize: 50,
    scale: 1,
    cellSizeScaled: 50,
    setScale,
  };
}, shallow);
