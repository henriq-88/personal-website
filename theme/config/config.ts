import { createTheme, ThemeOptions } from '@mui/material';
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
  },
  shape: {
    borderRadius: 12,
  },
});

const darkThemeOptions: ThemeOptions = ({
  palette: {
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
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderColor: `rgba(255, 255, 255, 0.23)`,
        },
      },
    },
  },
});

const lightThemeOptions: ThemeOptions = ({
  palette: {
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
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderColor: `rgba(0, 0, 0, 0.23)`,
        },
      },
    },
  },
});

export const buildDarkTheme = (options?: ThemeOptions) => {
  const theme = createTheme({
    ...baseThemeOptions,
    ...options,
    ...darkThemeOptions,
  });
  return responsiveFontSizes(theme);
};

export const buildLightTheme = (options?: ThemeOptions) => {
  const theme = createTheme({
    ...baseThemeOptions,
    ...options,
    ...lightThemeOptions,
  });
  return responsiveFontSizes(theme);
};
