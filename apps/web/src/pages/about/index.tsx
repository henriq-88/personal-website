import Head from "next/head";
import Page from "../../components/Section/About";

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = (props) => {
  return (
    <>
      <Head>
        <title>About - Henrik Wassdahl - UX Developer</title>
      </Head>
      <Page />;
    </>
  );
};

export default AboutPage;
