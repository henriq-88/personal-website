import { themeModeState } from "../../state/states";
import { useAtomValue } from "jotai";
import { ToastContainer } from "react-toastify";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const themeMode = useAtomValue(themeModeState);

  return (
    <>
      {props.children}
      <ToastContainer position="top-center" theme={themeMode} icon />
    </>
  );
};

export default ThemeProvider;
