import "../theme/styles/globals.css";
import type { AppProps } from "next/app";
import AppBar from "../components/Core/AppBar";
import CompositeProvider from "../components/CompositeProvider";
import { Poppins } from "@next/font/google";
import clsx from "clsx";
import Footer from "../components/Core/Footer";

import("../firebase/config");

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  // useIsOverlayVisible();

  return (
    <CompositeProvider>
      <AppBar />
      <main className={clsx(`flex-1`, poppins.className)}>
        {/* <SettingsDrawer /> */}
        <Component {...pageProps} />
      </main>
      <Footer />
    </CompositeProvider>
  );
}

// flex h-full w-full flex-1 flex-col items-center justify-center bg-gradient-to-b from-violet-200 to-violet-400 p-4 text-neutral-900 dark:from-[#0C0417] dark:to-[#250E48] dark:text-white sm:p-8
