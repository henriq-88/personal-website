import { createTheme, ThemeOptions } from '@mui/material';
import { responsiveFontSizes } from '@mui/material/styles';
import { merge } from "lodash-es";

const baseThemeOptions: ThemeOptions = ({
});

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
  const theme = createTheme(merge(baseThemeOptions, darkThemeOptions, options));
  return responsiveFontSizes(theme);
};

export const buildLightTheme = (options?: ThemeOptions) => {
  const theme = createTheme(merge(baseThemeOptions, lightThemeOptions, options));
  return responsiveFontSizes(theme);
};
