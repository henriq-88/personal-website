import { useWindowSize } from "rooks";

export const useIsScreenVertical = () => {
  const { innerWidth, innerHeight, } = useWindowSize();
  const width = innerWidth ?? 0
  const height = innerHeight ?? 0
  return width <= height
}