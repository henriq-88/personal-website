import { Settings as SettingsIcon } from '@mui/icons-material';
import { Cog6ToothIcon } from "@heroicons/react/24/solid"
import {
  Box, AppBar as MUIAppBar, Toolbar, Button,
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
        <Button
          variant="outlined"
          aria-label="settings"
          color="inherit"
          sx={{
            minWidth: 0,
            p: 1,
          }}
          onClick={() => setSettingsDrawerOpen((open) => !open)}
        >
          <Cog6ToothIcon className="h-6 w-6 text-current" />
        </Button>
      </Toolbar>
    </MUIAppBar>
  );
};

export default AppBar;
