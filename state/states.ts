import { Direction, PaletteMode } from '@mui/material';
import { atom } from 'jotai';

export const settingsDrawerOpenState = atom(false);

export const themeModeState = atom<PaletteMode>(undefined as PaletteMode | undefined);

export const directionState = atom<Direction>(`ltr`);
