import Head from "next/head";
import ProjectsSection from "../../components/Projects/Projects";

interface ProjectsPageProps {}

const ProjectsPage: React.FC<ProjectsPageProps> = (props) => {
  const title = `Projects - Henrik Wassdahl - UX Developer`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="og:title" content={title} />
      </Head>
      <ProjectsSection />
    </>
  );
};

export default ProjectsPage;
