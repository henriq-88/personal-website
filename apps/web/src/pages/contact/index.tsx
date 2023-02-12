import Head from "next/head";
import ContactSection from "../../components/Section/Contact/Contact";
interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = (props) => {
  return (
    <>
      <Head>
        <title>Contact - Henrik Wassdahl - UX Developer</title>
      </Head>
      <ContactSection />;
    </>
  );
};

export default ContactPage;
