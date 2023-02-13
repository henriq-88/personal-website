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
  const darkClasses = [`dark`, `color-scheme-dark`];
  const lightClasses = [`light`, `color-scheme-light`];
  switch (themeMode) {
    case `dark`: {
      lightClasses.forEach((lightClass) =>
        document.documentElement.classList.remove(lightClass),
      );
      darkClasses.forEach((darkClass) =>
        document.documentElement.classList.add(darkClass),
      );
      return;
    }
    case `light`: {
      darkClasses.forEach((darkClass) =>
        document.documentElement.classList.remove(darkClass),
      );
      lightClasses.forEach((lightClass) =>
        document.documentElement.classList.add(lightClass),
      );
      return;
    }
  }
};

export const setHTMLTextDirection = (textDirection: TextDirection) => {
  if (typeof window === `undefined`) {
    return;
  }
  document.body.dir = textDirection;
};