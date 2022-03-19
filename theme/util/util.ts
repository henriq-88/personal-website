import { createTheme, PaletteOptions, ThemeOptions } from '@mui/material';
import { orange, purple } from '@mui/material/colors';

const baseThemeOptions: ThemeOptions = ({
  typography: {
    fontFamily: [
      'Inter',
      'sans-serif',
    ].join(','),
  }
});

const darkThemePalette: PaletteOptions = ({
  mode: 'dark',
  primary: {
    main: purple[500],
  },
  secondary: {
    main: orange[500],
  },
});

const lightThemePalette: PaletteOptions = ({
  mode: 'light',
  primary: {
    main: purple[500],
  },
  secondary: {
    main: orange[500],
  },
});

export const buildDarkTheme = (options?: ThemeOptions) => createTheme({
  ...baseThemeOptions,
  ...options,
  palette: darkThemePalette,
});

export const buildLightTheme = (options?: ThemeOptions) => createTheme({
  ...baseThemeOptions,
  ...options,
  palette: lightThemePalette,
});
