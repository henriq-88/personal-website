import { createTheme, PaletteOptions, ThemeOptions } from '@mui/material';
import { deepPurple, deepOrange } from '@mui/material/colors';
import { responsiveFontSizes } from '@mui/material/styles';

const baseThemeOptions: ThemeOptions = ({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
    }
  }
});

const darkThemePalette: PaletteOptions = ({
  mode: 'dark',
  action: {
    active: deepPurple[`A200`],
  },
  primary: {
    main: deepOrange[500],
  },
  secondary: {
    main: deepPurple[`A200`],
  },
});

const lightThemePalette: PaletteOptions = ({
  mode: 'light',
  action: {
    active: deepOrange[500],
  },
  primary: {
    main: deepPurple[500],
  },
  secondary: {
    main: deepOrange[500],
  },
});

export const buildDarkTheme = (options?: ThemeOptions) => {
  const theme = createTheme({
    ...baseThemeOptions,
    ...options,
    palette: darkThemePalette,
  });
  return responsiveFontSizes(theme);
};

export const buildLightTheme = (options?: ThemeOptions) => {
  const theme = createTheme({
    ...baseThemeOptions,
    ...options,
    palette: lightThemePalette,
  });
  return responsiveFontSizes(theme);
};
