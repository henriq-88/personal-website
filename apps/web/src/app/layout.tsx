import "../theme/styles/globals.css";
import MeImage from "../assets/images/me.jpg";
import clsx from "clsx";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import AppBar from "../components/Core/AppBar";
import Footer from "../components/Core/Footer";
import Providers from "./providers";

const poppins = Poppins({
  weight: ["200", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://wassdahl.dev`),
  title: {
    default: `Henrik Wassdahl - UX Developer`,
    template: `%s - Henrik Wassdahl - UX Developer`,
  },
  description: `Henrik Wassdahl - UX Developer`,
  icons: `/favicon.ico`,
  openGraph: {
    type: `website`,
    url: `https://wassdahl.dev`,
    images: [
      {
        url: `https://wassdahl.dev${MeImage.src}`,
        alt: `Profile picture`,
      },
    ],
  },
  twitter: {
    card: `summary`,
  },
};

const themeInitScript = `
  function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  const systemThemeMode = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? 'dark'
  : 'light';
  const cookieThemeMode = getCookie('themeMode');
  const themeMode = (cookieThemeMode === 'light' || cookieThemeMode === 'dark') ? cookieThemeMode : undefined ?? systemThemeMode;
  document.documentElement.classList.add(themeMode);
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        dir="ltr"
        className="h-full bg-violet-400 bg-gradient-to-b from-violet-200 to-violet-400 bg-no-repeat text-neutral-900 selection:bg-violet-400 dark:bg-[#250E48] dark:from-[#0C0417] dark:to-[#250E48] dark:text-white dark:[color-scheme:dark] selection:dark:bg-violet-900"
      >
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <Providers>
          <AppBar className={poppins.className} />
          <main className={clsx(`flex-1`, poppins.className)}>{children}</main>
          <Footer className={poppins.className} />
        </Providers>
      </body>
    </html>
  );
}
