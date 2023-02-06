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
}