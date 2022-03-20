import { Settings as SettingsIcon } from '@mui/icons-material';
import {
  Box, AppBar as MUIAppBar, Toolbar, Button,
} from '@mui/material';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { settingsDrawerOpenState } from '@/state/states';

interface AppBarProps {
}

const AppBar: React.VFC<AppBarProps> = (props) => {
  const setSettingsDrawerOpen = useSetRecoilState(settingsDrawerOpenState);
  return (
    <MUIAppBar
      position="absolute"
      elevation={0}
      color="transparent"
      sx={{
        padding: `0 12px`
      }}
    >
      <Toolbar style={{
        padding: 0,
      }}>
        <Box sx={{flexGrow: 1}} />
        <Button
          variant="outlined"
          aria-label="settings"
          color="inherit"
          sx={{
            minWidth: 0,
            p: 1,
            borderRadius: `25%`,
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