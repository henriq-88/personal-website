import { SettingsBrightness as SettingsBrightnessIcon, DarkMode as DarkModeIcon, LightMode as LightModeIcon } from '@mui/icons-material';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useRecoilState } from 'recoil';
import { useMemo } from 'react';
import { themeModeState } from '@/state/states';

interface ThemeTogglerProps {
}

const ThemeToggler: React.VFC<ThemeTogglerProps> = (props) => {
  const [themeMode, setThemeMode] = useRecoilState(themeModeState);

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
    <ToggleButtonGroup
      value={mode}
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
        <LightModeIcon sx={{
          mr: 1,
        }}
        />
        <span>Light</span>
      </ToggleButton>
      <ToggleButton
        value="system"
        aria-label="system"
        sx={{
          flex: 1,
        }}
      >
        <SettingsBrightnessIcon sx={{
          mr: 1,
        }}
        />
        <span>System</span>
      </ToggleButton>
      <ToggleButton
        value="dark"
        aria-label="dark"
        sx={{
          flex: 1,
        }}
      >
        <DarkModeIcon sx={{
          mr: 1,
        }}
        />
        <span>Dark</span>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ThemeToggler;
