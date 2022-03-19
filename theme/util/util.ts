import { createTheme, PaletteOptions } from '@mui/material';
import { orange, purple } from '@mui/material/colors';

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

export const buildDarkTheme = () => createTheme({
  palette: darkThemePalette,
});

export const buildLightTheme = () => createTheme({
  palette: lightThemePalette,
});
