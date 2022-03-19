import { ThemeProvider as MUIThemeProvider, useMediaQuery } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { directionState, themeModeState } from '@/state/states';
import { buildDarkTheme, buildLightTheme } from '../util';
import RTLProvider from '../RTLProvider';

interface ThemeProviderProps {
}

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const themeMode = useRecoilValue(themeModeState);
  const direction = useRecoilValue(directionState);

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(() => {
    if (!themeMode) return prefersDarkMode ? buildDarkTheme({ direction }) : buildLightTheme({ direction });
    return themeMode === 'dark' ? buildDarkTheme({ direction }) : buildLightTheme({ direction });
  }, [
    themeMode,
    prefersDarkMode,
    direction,
  ]);

  useEffect(() => {
    document.querySelector(`body`).dir = direction;
  }, [direction])

  return (
    <MUIThemeProvider theme={theme}>
      {direction === `rtl`
        ? <RTLProvider>{props.children}</RTLProvider>
        : <>{props.children}</>
    }
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
