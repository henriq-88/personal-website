import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { z } from "zod";
import {
  getSystemTheme,
  setHTMLTextDirection,
  setHTMLThemeMode,
} from "../theme/utils";
import cookies from "js-cookie";

export const settingsDrawerOpenState = atom(false);

const themeModeSchema = z.enum([`light`, `dark`]).catch(() => getSystemTheme());

export type ThemeMode = z.infer<typeof themeModeSchema>;

export const themeModeState = atomWithStorage<ThemeMode>(
  `themeMode`,
  getSystemTheme(),
  {
    getItem: (key) => {
      const localStorageThemeMode = cookies.get(key);
      if (localStorageThemeMode === undefined) {
        const systemThemeMode = getSystemTheme();
        setHTMLThemeMode(systemThemeMode);
        return systemThemeMode;
      }
      const themeMode = themeModeSchema.parse(localStorageThemeMode);
      setHTMLThemeMode(themeMode);
      return themeMode;
    },
    removeItem: (key) => cookies.remove(key),
    setItem: (key, themeMode) => {
      setHTMLThemeMode(themeMode ?? getSystemTheme());
      if (themeMode === undefined) {
        return cookies.remove(key);
      }
      return cookies.set(key, themeMode);
    },
  },
);

const textDirectionSchema = z.enum([`ltr`, `rtl`]).catch(`ltr`);

export type TextDirection = z.infer<typeof textDirectionSchema>;

export const textDirectionState = atomWithStorage<TextDirection>(
  `textDirection`,
  `ltr`,
  {
    getItem: (key) => {
      const textDirection = textDirectionSchema.parse(cookies.get(key));
      setHTMLTextDirection(textDirection);
      return textDirection;
    },
    removeItem: (key) => cookies.remove(key),
    setItem: (key, updatedTextDirection) => {
      const textDirection = updatedTextDirection;
      setHTMLTextDirection(textDirection);
      return cookies.set(key, textDirection);
    },
  },
);
