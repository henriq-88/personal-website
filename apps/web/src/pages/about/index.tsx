import AboutSection from "../../components/Section/About/About";
import FullPageSection from "../../components/Section/FullPage/FullPage";

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = (props) => {
  return (
    <FullPageSection>
      <AboutSection />
    </FullPageSection>
  );
};

export default AboutPage;
