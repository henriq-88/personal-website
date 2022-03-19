import { Menu as MenuIcon, Settings as SettingsIcon } from '@mui/icons-material';
import {
  Box, AppBar as MUIAppBar, Toolbar, IconButton, Typography, Button,
} from '@mui/material';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { settingsDrawerOpenState } from '@/state/states';

interface AppBarProps {
}

const AppBar: React.VFC<AppBarProps> = (props) => {
  const setSettingsDrawerOpen = useSetRecoilState(settingsDrawerOpenState);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MUIAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="settings"
            sx={{ mr: 2 }}
            onClick={() => setSettingsDrawerOpen((open) => !open)}
          >
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </MUIAppBar>
    </Box>
  );
};

export default AppBar;
