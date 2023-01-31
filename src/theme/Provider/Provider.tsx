import { CssBaseline, ThemeProvider as MUIThemeProvider, useMediaQuery } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { directionState, themeModeState } from '@/state/states';
import { buildDarkTheme, buildLightTheme } from '@/theme/config';
import RTLProvider from '@/theme/RTLProvider';
import { SnackbarProvider } from 'notistack';
import { useAtomValue } from 'jotai';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const themeMode = useAtomValue(themeModeState);
  const direction = useAtomValue(directionState);

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
    const bodyElement = document.querySelector(`body`)
    if (!bodyElement) {
      return;
    }
    bodyElement.dir = direction;
  }, [direction])

  return (
    <MUIThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <CssBaseline />
        {direction === `rtl`
          ? <RTLProvider>{props.children}</RTLProvider>
          : <>{props.children}</>
        }
      </SnackbarProvider>
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
