import { Html, Head, Main, NextScript } from 'next/document'

const Document: React.VFC = (props) => {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Henrik Wassdahl - UX Developer" />
      </Head>
      <body dir="ltr">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document