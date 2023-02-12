import clsx from "clsx";
import { useIsScreenVertical } from "../../utils/screen";
import { Container } from "packages/ui";

interface ProjectsSectionProps {}

const ProjectsSection: React.FC<ProjectsSectionProps> = (props) => {
  const isScreenVertical = useIsScreenVertical();

  return (
    <Container className="flex h-full flex-1 items-center justify-center">
      <div className="relative flex flex-1 items-center justify-center">
        <div
          className={isScreenVertical ? `max-w-screen-xs` : `max-w-screen-lg`}
        >
          <div
            className={clsx("flex flex-1", {
              "flex-col": isScreenVertical,
              "gap-8": isScreenVertical,
              "gap-16": !isScreenVertical,
            })}
          >
            <div className="flex flex-1 flex-col justify-center">
              <h1 className="text-5xl font-bold leading-tight sm:text-6xl md:text-8xl">
                Projects
              </h1>
              <h2 className="text-4xl font-extralight leading-tight sm:text-5xl md:text-6xl">
                A glimse into my world
              </h2>
              <p className="mt-2 leading-loose">
                Here you can browse my previous experience of apps, services and
                more.
              </p>
            </div>
            <div className="flex aspect-square flex-1 items-center justify-center rounded-[25%] bg-violet-100 text-neutral-900 dark:bg-violet-900/50 dark:text-neutral-100">
              <h1 className="text-9xl">⚠</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex h-full w-full items-center justify-center p-4 backdrop-blur-lg">
        <h1 className="text-center text-5xl font-bold leading-tight sm:text-6xl md:text-8xl">
          Coming soon
        </h1>
      </div>
    </Container>
  );
};

export default ProjectsSection;
