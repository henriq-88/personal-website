import { useEffect, useState } from "react";

export const useIsScreenVertical = () => {
  const [isScreenVertical, setIsScreenVertical] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsScreenVertical(window.innerWidth <= window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isScreenVertical;
};

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

export const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
};

export const isTouchDevice = () => {
  return (
    !isServer() && ("ontouchstart" in window || navigator.maxTouchPoints > 0)
  );
};

export const isServer = () => {
  return typeof window === "undefined";
};
