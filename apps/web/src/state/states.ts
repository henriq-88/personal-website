import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils'

export const settingsDrawerOpenState = atom(false);

export type PaletteMode = 'light' | 'dark';

export const themeModeState = atomWithStorage<PaletteMode | undefined>(`themeMode`, undefined);

export type TextDirection = 'ltr' | 'rtl';

export const textDirectionState = atomWithStorage<TextDirection>(`direction`, `ltr`)
