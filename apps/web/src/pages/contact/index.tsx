import ContactSection from "../../components/Section/Contact/Contact";
import FullPageSection from "../../components/Section/FullPage/FullPage";

interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = (props) => {
  return (
    <FullPageSection>
      <ContactSection />
    </FullPageSection>
  );
};

export default ContactPage;
