import Head from "next/head";
import Page from "../../components/Project/Page";

interface ProjectsPageProps {}

const ProjectsPage: React.FC<ProjectsPageProps> = (props) => {
  const title = `Projects - Henrik Wassdahl - UX Developer`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="og:title" content={title} />
      </Head>
      <Page />
    </>
  );
};

export default ProjectsPage;
