import { Drawer } from '@mui/material';
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
      <div
        className="w-96"
        role="presentation"
      >
        <div className="flex h-16 items-center px-3 relative">
          <p className="flex-1">Settings</p>
          <button
            className="rounded-full p-2 bg-transparent hover:dark:bg-primary-500/20 hover:bg-secondary-500/20 transition-colors text-secondary-500 dark:text-primary-500"
            aria-label="close"
            onClick={() => setSettingsDrawerOpen(false)}
          >
            <XMarkIcon className="h-6 w-6 text-current" />
          </button>
        </div>
        <hr className="border-1 border-solid dark:bg-[#ffffff1f] bg-[#0000001f] border-transparent" />
        <div className="flex p-3 items-stretch flex-col">
          <ThemeToggle />
          <div className="mt-3" />
          <DirectionToggle />
        </div>
      </div>
    </Drawer>
  );
};

export default SettingsDrawer;
