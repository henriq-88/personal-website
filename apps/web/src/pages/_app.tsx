import "../theme/styles/globals.css";
import type { AppProps } from "next/app";
import AppBar from "../components/Core/AppBar";
import CompositeProvider from "../components/CompositeProvider";
import SettingsDrawer from "../components/Core/SettingsDrawer";
import { Poppins } from "@next/font/google";
import clsx from "clsx";
import { useIsOverlayVisible } from "../utils/modal";

import("../firebase/config");

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  useIsOverlayVisible();

  return (
    <main
      className={clsx(
        "bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white",
        poppins.className,
      )}
    >
      <CompositeProvider>
        <AppBar />
        <SettingsDrawer />
        <Component {...pageProps} />
      </CompositeProvider>
    </main>
  );
}
