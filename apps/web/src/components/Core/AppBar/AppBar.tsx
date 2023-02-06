import { Cog6ToothIcon } from "@heroicons/react/24/solid"
import React from 'react';
import { useSetAtom } from 'jotai';
import { settingsDrawerOpenState } from '../../../state/states';
interface AppBarProps {
}

const AppBar: React.FC<AppBarProps> = (props) => {
  const setSettingsDrawerOpen = useSetAtom(settingsDrawerOpenState);
  return (
    <div className="absolute top-0 left-0 right-0 z-10 w-full flex justify-end">
      <div className="h-16 px-3 flex items-center">
        <button
          className="rounded-xl border border-solid border-[#0000001f] dark:border-[#ffffff1f] p-2 bg-transparent hover:bg-[#00000014] hover:dark:bg-[#ffffff14] transition-colors"
          aria-label="settings"
          onClick={() => setSettingsDrawerOpen((open) => !open)}
        >
          <Cog6ToothIcon className="h-6 w-6 text-current" />
        </button>
      </div>
    </div>
  );
};

export default AppBar;
