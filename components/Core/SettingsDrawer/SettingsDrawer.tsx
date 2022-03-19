import { useRecoilState } from 'recoil';
import {
  Box, Divider, Drawer, IconButton, Stack, Typography,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { settingsDrawerOpenState } from '@/state/states';
import ThemeToggle from '@/components/ThemeToggle';
import DirectionToggle from '@/components/DirectionToggle';

interface SettingsDrawerProps {
}

const SettingsDrawer: React.VFC<SettingsDrawerProps> = (props) => {
  const [settingsDrawerOpen, setSettingsDrawerOpen] = useRecoilState(settingsDrawerOpenState);
  return (
    <Drawer
      anchor="right"
      open={settingsDrawerOpen}
      onClose={() => setSettingsDrawerOpen(false)}
    >
      <Box
        sx={{ width: 340 }}
        role="presentation"
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center" p={1.5}>
          <Typography>
            Settings

          </Typography>
          <IconButton onClick={() => setSettingsDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Stack>
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
