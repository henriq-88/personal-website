import Head from "next/head";
import Page from "../../components/About";

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = (props) => {
  const title = `About - Henrik Wassdahl - UX Developer`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="og:title" content={title} />
      </Head>
      <Page />
    </>
  );
};

export default AboutPage;
