import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailsPage from "../../../components/Project/Details/Page";
import { getProject, getProjectSlugs } from "../../../utils/projects.server";

interface ProjectPageProps {
  params: Promise<{ projectSlug: string }>;
}

export const generateStaticParams = () => {
  const slugs = getProjectSlugs();
  return slugs.map((projectSlug) => ({ projectSlug }));
};

export const generateMetadata = async (
  props: ProjectPageProps,
): Promise<Metadata> => {
  const { projectSlug } = await props.params;
  const { project } = await getProject(projectSlug);
  return {
    title: project.name,
    openGraph: project.banner
      ? {
          images: [{ url: project.banner, alt: `Project image` }],
        }
      : undefined,
  };
};

const ProjectPage = async (props: ProjectPageProps) => {
  const { projectSlug } = await props.params;
  const { project, content } = await getProject(projectSlug);
  if (!project) {
    notFound();
  }
  return <ProjectDetailsPage project={project} content={content} />;
};

export default ProjectPage;
