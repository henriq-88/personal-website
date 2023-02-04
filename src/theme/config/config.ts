import { createTheme, ThemeOptions } from '@mui/material';

const darkThemeOptions: ThemeOptions = ({
  palette: {
    mode: 'dark',
  },
});

const lightThemeOptions: ThemeOptions = ({
  palette: {
    mode: 'light',
  },
});

export const buildDarkTheme = (options?: ThemeOptions) => {
  const theme = createTheme({...darkThemeOptions, ...options});
  return theme;
};

export const buildLightTheme = (options?: ThemeOptions) => {
  const theme = createTheme({...lightThemeOptions, ...options});
  return theme;
};
