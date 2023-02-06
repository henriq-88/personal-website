import "react-toastify/dist/ReactToastify.css";
import { useEffect, useMemo } from "react";
import { textDirectionState, themeModeState } from "../../state/states";
import { useAtomValue } from "jotai";
import { useMediaQuery } from "usehooks-ts";
import { ToastContainer } from "react-toastify";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const themeMode = useAtomValue(themeModeState);
  const direction = useAtomValue(textDirectionState);

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(() => {
    if (!themeMode) return prefersDarkMode ? `dark` : `light`;
    return themeMode;
  }, [themeMode, prefersDarkMode, direction]);

  useEffect(() => {
    const bodyElement = document.querySelector(`body`);
    if (!bodyElement) {
      return;
    }
    bodyElement.dir = direction;
  }, [direction]);

  useEffect(() => {
    const htmlElement = document.querySelector(`html`);
    if (!htmlElement) {
      return;
    }
    htmlElement.className = theme;
  }, [theme]);

  return (
    <>
      {props.children}
      <ToastContainer position="top-center" theme={theme} icon />
    </>
  );
};

export default ThemeProvider;
