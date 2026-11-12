import type { Metadata } from "next";
import Page from "../../components/About";

export const metadata: Metadata = {
  title: `About`,
};

export default function AboutPage() {
  return <Page />;
}
