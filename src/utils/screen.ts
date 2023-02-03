import { useWindowSize } from "rooks";

export const useIsScreenVertical = () => {
  const { innerWidth, innerHeight, } = useWindowSize();
  const width = innerWidth ?? 0
  const height = innerHeight ?? 0
  console.log({width, height}, width < height);
  
  return width < height
}