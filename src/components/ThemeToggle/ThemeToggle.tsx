import { SunIcon, MoonIcon, } from "@heroicons/react/24/solid"
import SettingsBrightnessIcon from "@/components/Icons/SettingsBrigthness"
import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { useMemo } from 'react';
import { themeModeState } from '@/state/states';
import { useAtom } from 'jotai';

interface ThemeToggleProps {
}

const ThemeToggle: React.FC<ThemeToggleProps> = (props) => {
  const [themeMode, setThemeMode] = useAtom(themeModeState);

  const mode = useMemo(() => {
    if (!themeMode) return 'system';
    return themeMode;
  }, [themeMode]);

  const handleModeChange = (newMode: typeof mode) => {
    if (!newMode) return;
    if (newMode === 'system') {
      setThemeMode(undefined);
      return;
    }
    setThemeMode(newMode);
  };

  return (
    <>
      <Typography
        variant="caption"
        sx={{
          textTransform: 'uppercase',
        }}
      >
        Mode
      </Typography>
      <ToggleButtonGroup
        value={mode}
        color="secondary"
        exclusive
        onChange={(event, newMode: typeof mode) => handleModeChange(newMode)}
        aria-label="theme mode"
      >
        <ToggleButton
          value="light"
          aria-label="light"
          sx={{
            flex: 1,
          }}
        >
          <SunIcon className="h-6 w-6 text-current ltr:mr-1 rtl:ml-1" />
          <span>Light</span>
        </ToggleButton>
        <ToggleButton
          value="system"
          aria-label="system"
          sx={{
            flex: 1,
          }}
        >
          <SettingsBrightnessIcon className="h-6 w-6 text-current ltr:mr-1 rtl:ml-1" />
          <span>System</span>
        </ToggleButton>
        <ToggleButton
          value="dark"
          aria-label="dark"
          sx={{
            flex: 1,
          }}
        >
          <MoonIcon className="h-6 w-6 text-current ltr:mr-1 rtl:ml-1" />
          <span>Dark</span>
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

export default ThemeToggle;
