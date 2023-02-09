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
              const systemThemeMode = window.matchMedia("(prefers-color-scheme: dark)").matches
              ? 'dark'
              : 'light';
              const localStorageThemeMode = localStorage.getItem('themeMode');
              const themeMode = (localStorageThemeMode === 'light' || localStorageThemeMode === 'dark') ? localStorageThemeMode : undefined ?? systemThemeMode;
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
            const localStorageTextDirection = localStorage.getItem('textDirection');
            const textDirection = (localStorageTextDirection === 'ltr' || localStorageTextDirection === 'rtl') ? localStorageTextDirection : 'ltr';
            document.body.dir = textDirection;
          `,
        }}
      />
    </Html>
  );
};

export default Document;
