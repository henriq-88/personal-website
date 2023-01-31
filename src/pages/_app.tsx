import "@/theme/styles/globals.css";
import "@/firebase/config";
import type { AppProps } from 'next/app';
import AppBar from '@/components/Core/AppBar';
import CompositeProvider from '@/components/CompositeProvider';
import SettingsDrawer from '@/components/Core/SettingsDrawer';
import { NoSsr } from '@mui/material';
import { Poppins } from "@next/font/google"

const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --theme-font: ${poppins.style.fontFamily};
          }
        `}
      </style>
      <NoSsr>
        <CompositeProvider>
          <AppBar />
          <SettingsDrawer />
          <Component {...pageProps} />
        </CompositeProvider>
      </NoSsr>
    </>
  );
}
