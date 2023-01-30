import { Settings as SettingsIcon } from '@mui/icons-material';
import {
  Box, AppBar as MUIAppBar, Toolbar, Button,
} from '@mui/material';
import React from 'react';
import { useSetAtom } from 'jotai';
import { settingsDrawerOpenState } from '@/state/states';

interface AppBarProps {
}

const AppBar: React.VFC<AppBarProps> = (props) => {
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
          <SettingsIcon />
        </Button>
      </Toolbar>
    </MUIAppBar>
  );
};

export default AppBar;
