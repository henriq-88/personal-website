import AboutSection from "@/components/Section/About";
import ContactSection from "@/components/Section/Contact";
import IntroSection from "@/components/Section/Intro";
import ProjectsSection from "@/components/Section/Projects";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Henrik Wassdahl - UX Developer</title>
      </Head>
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}
