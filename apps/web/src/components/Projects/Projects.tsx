import { Container, TextField } from "packages/ui";
import ProjectCard from "./Card";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useCallback, useMemo, useState } from "react";
import { useWindowSize } from "rooks";

interface ProjectsSectionProps {}

const ProjectsSection: React.FC<ProjectsSectionProps> = (props) => {
  const { innerWidth } = useWindowSize();
  const [gridRef] = useAutoAnimate(/* optional config */);

  const [projects, setProjects] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [search, setSearch] = useState("");

  const columnCount = useMemo(() => {
    if (!innerWidth) {
      return 1;
    }
    if (innerWidth >= 1024) {
      return 3;
    }
    if (innerWidth >= 640) {
      return 2;
    }
    return 1;
  }, [innerWidth]);

  const getBorderRadiusClassName = useCallback(
    ({
      index,
      length,
      columnCount,
    }: {
      index: number;
      length: number;
      columnCount: number;
    }) => {
      return [
        // top left
        ...(index === 0 ? [`rounded-tl-xl`] : []),
        // top right
        ...(index % columnCount === columnCount - 1 && index < columnCount
          ? [`rounded-tr-xl`]
          : []),
        // bottom left
        ...(index % columnCount === 0 && length - columnCount <= index
          ? [`rounded-bl-xl`]
          : []),
        // bottom right, second last row
        ...(index % columnCount === columnCount - 1 &&
        length - columnCount < index
          ? [`rounded-br-xl`]
          : []),
        // bottom right, last row
        ...(index === length - 1 ? [`rounded-br-xl`] : []),
      ].join(` `);
    },
    [],
  );

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
        {projects.map((item, i, projects) => {
          const borderRadiusClassName = getBorderRadiusClassName({
            index: i,
            length: projects.length,
            columnCount,
          });
          return <ProjectCard key={item} className={borderRadiusClassName} />;
        })}
      </div>
    </Container>
  );
};

export default ProjectsSection;
