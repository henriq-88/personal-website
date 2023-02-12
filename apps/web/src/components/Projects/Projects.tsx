import { Container, TextField } from "packages/ui";
import ProjectCard from "./Card";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";

interface ProjectsSectionProps {}

const ProjectsSection: React.FC<ProjectsSectionProps> = (props) => {
  const [gridRef] = useAutoAnimate(/* optional config */);

  const [projects, setProjects] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [search, setSearch] = useState("");

  console.log({ search });

  return (
    <Container className="h-full flex-1">
      <TextField
        label="Search"
        value={search}
        placeholder="Search project name, category or tag"
        hideErrors
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
      <div
        className="mt-3 grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-3"
        ref={gridRef}
      >
        {projects.map((item) => (
          <ProjectCard key={item} />
        ))}
      </div>
    </Container>
  );
};

export default ProjectsSection;
