import { Html, Head, Main, NextScript } from 'next/document'

const Document: React.FC = (props) => {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
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