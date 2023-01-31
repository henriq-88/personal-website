import {
  Box, Divider, Drawer, Stack, Toolbar, Typography,
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
          <button
            className="rounded-full p-2 bg-transparent hover:dark:bg-primary-dark/20 hover:bg-primary-light/20 transition-colors text-primary-light dark:text-primary-dark"
            aria-label="close"
            onClick={() => setSettingsDrawerOpen(false)}
          >
            <XMarkIcon className="h-6 w-6 text-current" />
          </button>
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
