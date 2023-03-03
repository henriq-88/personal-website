import { Html, Head, Main, NextScript } from "next/document";

const Document: React.FC = (props) => {
  return (
    <Html lang="en" className="h-full">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Henrik Wassdahl - UX Developer" />
        {}
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://wassdahl.dev" />
        <meta name="twitter:card" content="summary" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
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
            `,
          }}
        />
      </Head>
      <body
        dir="ltr"
        className="h-full bg-violet-400 bg-gradient-to-b from-violet-200 to-violet-400 bg-no-repeat text-neutral-900 selection:bg-violet-400 dark:bg-[#250E48] dark:from-[#0C0417] dark:to-[#250E48] dark:text-white dark:[color-scheme:dark] selection:dark:bg-violet-900"
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
