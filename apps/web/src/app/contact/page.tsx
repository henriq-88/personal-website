import type { Metadata } from "next";
import ContactSection from "../../components/Contact/Contact";

export const metadata: Metadata = {
  title: `Contact`,
};

export default function ContactPage() {
  return <ContactSection />;
}
