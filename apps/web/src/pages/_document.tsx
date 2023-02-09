import { Html, Head, Main, NextScript } from "next/document";

const Document: React.FC = (props) => {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Henrik Wassdahl - UX Developer" />
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
      <body dir="ltr">
        <Main />
        <NextScript />
      </body>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            const cookieTextDirection = getCookie('textDirection');
            const textDirection = (cookieTextDirection === 'ltr' || cookieTextDirection === 'rtl') ? cookieTextDirection : 'ltr';
            document.body.dir = textDirection;
          `,
        }}
      />
    </Html>
  );
};

export default Document;
