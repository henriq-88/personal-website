import {
  Box, Divider, Drawer, IconButton, Stack, Toolbar, Typography,
} from '@mui/material';
import { XMarkIcon } from "@heroicons/react/24/solid"
import { settingsDrawerOpenState } from '@/state/states';
import ThemeToggle from '@/components/ThemeToggle';
import DirectionToggle from '@/components/DirectionToggle';
import { useAtom } from 'jotai';

interface SettingsDrawerProps {
}

const SettingsDrawer: React.FC<SettingsDrawerProps> = (props) => {
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
            <XMarkIcon className="h-6 w-6 text-current" />
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
