import Head from "next/head";
import ContactSection from "../../components/Contact/Contact";

interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = (props) => {
  const title = `Contact - Henrik Wassdahl - UX Developer`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="og:title" content={title} />
      </Head>
      <ContactSection />
    </>
  );
};

export default ContactPage;
