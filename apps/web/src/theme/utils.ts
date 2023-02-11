import { TextDirection, ThemeMode } from "../state/states";

export const getSystemTheme = () => {
  if (typeof window === `undefined`) {
    return `dark`;
  }
  const systemThemeMode = window.matchMedia(`(prefers-color-scheme: dark)`)
    .matches
    ? `dark`
    : `light`;
  return systemThemeMode;
};

export const setHTMLThemeMode = (themeMode: ThemeMode) => {
  if (typeof window === `undefined`) {
    return;
  }
  const darkClasses = [themeMode, `color-scheme-dark`];
  const lightClasses = [themeMode, `color-scheme-light`];
  const className = (themeMode === `dark` ? darkClasses : lightClasses).join(
    ` `,
  );
  document.documentElement.className = className;
};

export const setHTMLTextDirection = (textDirection: TextDirection) => {
  if (typeof window === `undefined`) {
    return;
  }
  document.body.dir = textDirection;
};
