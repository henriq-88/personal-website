import IntroSection from "../components/Section/Intro";
import AboutSection from "../components/Section/About";
import ProjectsSection from "../components/Section/Projects";
import ContactSection from "../components/Section/Contact";
import FullPageSection from "../components/Section/FullPage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Henrik Wassdahl - UX Developer</title>
      </Head>
      <FullPageSection>
        <IntroSection />
      </FullPageSection>
      {/* <FullPageSection id="about">
        <AboutSection />
      </FullPageSection>
      <FullPageSection id="projects">
        <ProjectsSection />
      </FullPageSection>
      <FullPageSection id="contact">
        <ContactSection />
      </FullPageSection> */}
    </>
  );
}
