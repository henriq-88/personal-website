import AboutSection from "@/components/Section/About";
import ContactSection from "@/components/Section/Contact";
import IntroSection from "@/components/Section/Intro";
import ProjectsSection from "@/components/Section/Projects";

export default function Home() {
  return (
    <>
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}
