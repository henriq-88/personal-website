import { Direction, PaletteMode } from '@mui/material';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const settingsDrawerOpenState = atom({
  key: 'settingsDrawer',
  default: false,
});

export const themeModeState = atom<PaletteMode | undefined>({
  key: 'themeMode',
  default: undefined,
  effects: [persistAtom],
});

export const directionState = atom<Direction>({
  key: 'direction',
  default: `ltr`,
  effects: [persistAtom],
});
