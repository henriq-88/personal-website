import { Cog6ToothIcon } from "@heroicons/react/24/solid"
import {
  Box, AppBar as MUIAppBar, Toolbar,
} from '@mui/material';
import React from 'react';
import { useSetAtom } from 'jotai';
import { settingsDrawerOpenState } from '@/state/states';
interface AppBarProps {
}

const AppBar: React.FC<AppBarProps> = (props) => {
  const setSettingsDrawerOpen = useSetAtom(settingsDrawerOpenState);
  return (
    <MUIAppBar
      position="absolute"
      elevation={0}
      color="transparent"
    >
      <Toolbar disableGutters>
        <Box sx={{flexGrow: 1}} />
        <button
          className="rounded-xl border border-solid border-[#0000001f] dark:border-[#ffffff1f] p-2 bg-transparent hover:bg-[#00000014] hover:dark:bg-[#ffffff14] transition-colors"
          aria-label="settings"
          onClick={() => setSettingsDrawerOpen((open) => !open)}
        >
          <Cog6ToothIcon className="h-6 w-6 text-current" />
        </button>
      </Toolbar>
    </MUIAppBar>
  );
};

export default AppBar;
