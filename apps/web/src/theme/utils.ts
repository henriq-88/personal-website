import { TextDirection, ThemeMode } from "../state/states";

export const getSystemTheme = () => {
  const systemThemeMode = window.matchMedia(`(prefers-color-scheme: dark)`)
    .matches
    ? `dark`
    : `light`;
  return systemThemeMode;
};

export const setHTMLThemeMode = (themeMode: ThemeMode) => {
  document.documentElement.className = themeMode;
};

export const setHTMLTextDirection = (textDirection: TextDirection) => {
  document.body.dir = textDirection;
};
