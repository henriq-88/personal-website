import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { z } from "zod";
import {
  getSystemTheme,
  setHTMLTextDirection,
  setHTMLThemeMode,
} from "../theme/utils";
import {
  get as getCookie,
  set as setCookie,
  remove as removeCookie,
} from "js-cookie";

export const settingsDrawerOpenState = atom(false);

const themeModeSchema = z.enum([`light`, `dark`]).catch(() => getSystemTheme());

export type ThemeMode = z.infer<typeof themeModeSchema>;

export const themeModeState = atomWithStorage<ThemeMode | undefined>(
  `themeMode`,
  undefined,
  {
    getItem: (key) => {
      const localStorageThemeMode = localStorage.getItem(key);
      if (localStorageThemeMode === null) {
        setHTMLThemeMode(getSystemTheme());
        return undefined;
      }
      const themeMode = themeModeSchema.parse(localStorageThemeMode);
      setHTMLThemeMode(themeMode);
      return themeMode;
    },
    removeItem: (key) => localStorage.removeItem(key),
    setItem: (key, themeMode) => {
      setHTMLThemeMode(themeMode ?? getSystemTheme());
      if (themeMode === undefined) {
        return localStorage.removeItem(key);
      }
      return localStorage.setItem(key, themeMode);
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
      const textDirection = textDirectionSchema.parse(
        localStorage.getItem(key),
      );
      setHTMLTextDirection(textDirection);
      return textDirection;
    },
    removeItem: (key) => localStorage.removeItem(key),
    setItem: (key, updatedTextDirection) => {
      const textDirection = updatedTextDirection;
      setHTMLTextDirection(textDirection);
      return localStorage.setItem(key, textDirection);
    },
  },
);
