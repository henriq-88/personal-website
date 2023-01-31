import { createTheme, ThemeOptions } from '@mui/material';
import { deepPurple, deepOrange } from '@mui/material/colors';
import { responsiveFontSizes } from '@mui/material/styles';
import { merge } from "lodash-es";

const baseThemeOptions: ThemeOptions = ({
  typography: {
    fontFamily: [
      'var(--theme-font)',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
    }
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 64,
          paddingLeft: 12,
          paddingRight: 12,
        },
      },
      defaultProps: {
        disableGutters: true,
      },
    },
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
          borderColor: `rgba(255, 255, 255, 0.12)`,
        },
      },
    },
  },
});

const lightThemeOptions: ThemeOptions = ({
  palette: {
    mode: 'light',
    action: {
      active: deepOrange[`A200`],
    },
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: deepOrange[`A200`],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderColor: `rgba(0, 0, 0, 0.12)`,
        },
      },
    },
  },
});

export const buildDarkTheme = (options?: ThemeOptions) => {
  const theme = createTheme(merge(baseThemeOptions, darkThemeOptions, options));
  return responsiveFontSizes(theme);
};

export const buildLightTheme = (options?: ThemeOptions) => {
  const theme = createTheme(merge(baseThemeOptions, lightThemeOptions, options));
  return responsiveFontSizes(theme);
};
