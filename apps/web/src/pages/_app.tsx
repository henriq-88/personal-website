import "../theme/styles/globals.css";
import type { AppProps } from 'next/app';
import AppBar from '../components/Core/AppBar';
import CompositeProvider from '../components/CompositeProvider';
import SettingsDrawer from '../components/Core/SettingsDrawer';
import { Poppins } from "@next/font/google"
import clsx from "clsx";

import("../firebase/config");

const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={clsx("bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white", poppins.className)}>
      <CompositeProvider>
        <AppBar />
        <SettingsDrawer />
        <Component {...pageProps} />
      </CompositeProvider>
    </main>
  );
}
