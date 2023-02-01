import { atom } from 'jotai';

export const settingsDrawerOpenState = atom(false);

export type PaletteMode = 'light' | 'dark';

export const themeModeState = atom<PaletteMode | undefined>(undefined);

export type Direction = 'ltr' | 'rtl';

export const directionState = atom<Direction>(`ltr`);
