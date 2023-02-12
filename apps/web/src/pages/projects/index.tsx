import Head from "next/head";
import ProjectsSection from "../../components/Section/Projects/Projects";

interface ProjectsPageProps {}

const ProjectsPage: React.FC<ProjectsPageProps> = (props) => {
  return (
    <>
      <Head>
        <title>Projects - Henrik Wassdahl - UX Developer</title>
      </Head>
      <ProjectsSection />;
    </>
  );
};

export default ProjectsPage;
