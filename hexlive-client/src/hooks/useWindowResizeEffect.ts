import { useEffect } from "react";

export const useWindowResizeEffect = (callback: () => void) => {
  useEffect(() => {
    window.addEventListener("resize", callback);
    return () => window.removeEventListener("resize", callback);
  }, [callback]);
};
