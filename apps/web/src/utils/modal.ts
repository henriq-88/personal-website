import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { settingsDrawerOpenState } from "../state/states";

export const useIsOverlayVisible = () => {
  const isSettingsDrawerOpen = useAtomValue(settingsDrawerOpenState);

  useEffect(() => {
    if (isSettingsDrawerOpen) {
      document.body.classList.add("overlay-visible");
    }
    return () => {
      document.body.classList.remove("overlay-visible");
    };
  }, [isSettingsDrawerOpen]);
};
