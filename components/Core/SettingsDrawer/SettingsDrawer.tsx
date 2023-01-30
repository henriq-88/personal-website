import {
  Box, Divider, Drawer, IconButton, Stack, Toolbar, Typography,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { settingsDrawerOpenState } from '@/state/states';
import ThemeToggle from '@/components/ThemeToggle';
import DirectionToggle from '@/components/DirectionToggle';
import { useAtom } from 'jotai';

interface SettingsDrawerProps {
}

const SettingsDrawer: React.VFC<SettingsDrawerProps> = (props) => {
  const [settingsDrawerOpen, setSettingsDrawerOpen] = useAtom(settingsDrawerOpenState);
  return (
    <Drawer
      anchor="right"
      open={settingsDrawerOpen}
      PaperProps={{
        sx: {
          backgroundImage: `none`,
        }
      }}
      onClose={() => setSettingsDrawerOpen(false)}
    >
      <Box
        sx={{ width: 330 }}
        role="presentation"
      >
        <Toolbar>
          <Typography sx={{
            flexGrow: 1
          }}>
            Settings
          </Typography>
          <IconButton
            aria-label="close"
            onClick={() => setSettingsDrawerOpen(false)}
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <Stack p={1.5} justifyContent="stretch" sx={{
          "& > span": {
            mt: 2
          },
          "& > span:first-of-type": {
            mt: 1
          },
        }}>
          <ThemeToggle />
          <DirectionToggle />
        </Stack>
      </Box>
    </Drawer>
  );
};

export default SettingsDrawer;
