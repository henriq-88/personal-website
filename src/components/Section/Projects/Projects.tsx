import ContinueButton from "@/components/ContinueButton";
import { useWindowSize } from "rooks";
import Image from "next/image";
import { themeModeState } from "@/state/states";
import { useAtomValue } from "jotai";
import clsx from "clsx";

interface ProjectsSectionProps {
}

const ProjectsSection: React.FC<ProjectsSectionProps> = (props) => {
  const theme = useAtomValue(themeModeState);
  const { outerWidth, outerHeight, } = useWindowSize();
  const width = outerWidth ?? 0
  const height = outerHeight ?? 0

  return (
    <div
      className={clsx("flex flex-1 flex-col justify-center items-center w-full h-full p-8", {
        "dark:bg-secondary-900": theme !== `light`,
        "bg-primary-A100 text-neutral-900": theme === `light`,
      })}
    >
      <div className="flex flex-1 justify-center items-center">
        <div className={width < height ? `max-w-screen-xs` : `max-w-screen-lg`}>
          <div
            className={clsx('flex flex-1', {
              "flex-col": width < height,
              "gap-8": width < height,
              "gap-16": width >= height,
            })}
          >
            <div className="flex flex-1 flex-col justify-center">
              <h1 className="text-8xl font-bold leading-tight">Projects</h1>
              <h2 className="text-6xl font-thin leading-tight">A glimse into my world</h2>
              <p className="mt-2 leading-loose">Here you can browse my previous experience of apps, services and more.</p>
            </div>
            <div className="flex flex-1 justify-center items-center">
              <Image
                width={512}
                height={512}
                alt="dancing banana gif"
                src="https://c.tenor.com/ZgbW9V5PKoMAAAAC/banana-dance-dancing-banana.gif"
                style={{
                  borderRadius: `25%`,
                  maxWidth: 512,
                  aspectRatio: `1`,
                  width: `100%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center absolute p-4 w-full h-full backdrop-blur-lg bg-black/50">
        <h1 className="text-8xl font-bold leading-tight">⚠ Coming soon ⚠</h1>
      </div>
      <div className="flex justify-center mt-8 w-full">
        <ContinueButton
          targetId="contact"
          label="Contact"
        />
      </div>
    </div>
  );
};

export default ProjectsSection;
