import "../theme/styles/globals.css";
import MeImage from "../assets/images/me.jpg";
import type { AppProps } from "next/app";
import AppBar from "../components/Core/AppBar";
import CompositeProvider from "../components/CompositeProvider";
import { Poppins } from "@next/font/google";
import clsx from "clsx";
import Footer from "../components/Core/Footer";
import Head from "next/head";

import("../firebase/config");

const poppins = Poppins({
  weight: ["200", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="og:image" content={`https://wassdahl.dev${MeImage.src}`} />
        <meta name="og:image:alt" content="Profile picture" />
      </Head>
      <CompositeProvider>
        <AppBar />
        <main className={clsx(`flex-1`, poppins.className)}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </CompositeProvider>
    </>
  );
}
