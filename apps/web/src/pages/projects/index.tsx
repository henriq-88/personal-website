import FullPageSection from "../../components/Section/FullPage/FullPage";
import ProjectsSection from "../../components/Section/Projects/Projects";

interface ProjectsPageProps {}

const ProjectsPage: React.FC<ProjectsPageProps> = (props) => {
  return (
    <FullPageSection>
      <ProjectsSection />
    </FullPageSection>
  );
};

export default ProjectsPage;
