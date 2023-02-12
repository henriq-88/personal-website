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
  preload: false,
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
