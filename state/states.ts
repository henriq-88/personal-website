import { PaletteMode } from '@mui/material';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const settingsDrawerOpenState = atom({
  key: 'settingsDrawerState',
  default: false,
});

export const themeModeState = atom<PaletteMode | undefined>({
  key: 'themeMode',
  default: undefined,
  effects: [persistAtom],
});
