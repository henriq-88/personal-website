import { Suspense } from "react";
import type { Metadata } from "next";
import Page from "../../components/Project/Page";
import { getAllProjects } from "../../utils/projects.server";

export const metadata: Metadata = {
  title: `Projects`,
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  return (
    <Suspense>
      <Page projects={projects} />
    </Suspense>
  );
}
