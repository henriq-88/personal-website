import IntroPage from "../components/Intro";
import Head from "next/head";

export default function Home() {
  const title = `Henrik Wassdahl - UX Developer`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="og:title" content={title} />
      </Head>
      <IntroPage />
    </>
  );
}
