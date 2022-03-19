import { ThemeProvider as MUIThemeProvider, useMediaQuery } from '@mui/material';
import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { themeModeState } from '@/state/states';
import { buildDarkTheme, buildLightTheme } from '../util';

interface ThemeProviderProps {
}

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const themeMode = useRecoilValue(themeModeState);

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(() => {
    if (!themeMode) return prefersDarkMode ? buildDarkTheme() : buildLightTheme();
    return themeMode === 'dark' ? buildDarkTheme() : buildLightTheme();
  }, [themeMode, prefersDarkMode]);

  return (
    <MUIThemeProvider theme={theme}>
      {props.children}
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
