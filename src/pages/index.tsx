import FullPageSection from "@/components/Section/FullPage";
import dynamic from "next/dynamic";
import Head from "next/head";


const IntroSection = dynamic(() => import('@/components/Section/Intro'), {
  loading: () => <div className="bg-white" />,
})
const AboutSection = dynamic(() => import('@/components/Section/About'), {
  loading: () => <div>Loading</div>,
})
const ProjectsSection = dynamic(() => import('@/components/Section/Projects'), {
  loading: () => <div>Loading</div>,
})
const ContactSection = dynamic(() => import('@/components/Section/Contact'), {
  loading: () => <div>Loading</div>,
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Henrik Wassdahl - UX Developer</title>
      </Head>
      <FullPageSection
        id="intro"
      >
        <IntroSection />
      </FullPageSection>
      <FullPageSection id="about">
        <AboutSection />
      </FullPageSection>
      <FullPageSection id="projects">
        <ProjectsSection />
      </FullPageSection>
      <FullPageSection id="contact">
        <ContactSection />
      </FullPageSection>
    </>
  )
}
