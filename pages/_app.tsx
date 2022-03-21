import type { AppProps } from 'next/app';
import AppBar from '@/components/Core/AppBar';
import CompositeProvider from '@/components/CompositeProvider';
import SettingsDrawer from '@/components/Core/SettingsDrawer';
import { NoSsr } from '@mui/material';
import "@/firebase/config";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NoSsr>
      <CompositeProvider>
        <AppBar />
        <SettingsDrawer />
        <Component {...pageProps} />
      </CompositeProvider>
    </NoSsr>
  );
}
