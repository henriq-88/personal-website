import ContinueButton from "@/components/ContinueButton";
import Image from "next/image";
import { themeModeState } from "@/state/states";
import { useAtomValue } from "jotai";
import clsx from "clsx";
import { useIsScreenVertical } from "@/utils/screen";

interface ProjectsSectionProps {
}

const ProjectsSection: React.FC<ProjectsSectionProps> = (props) => {
  const theme = useAtomValue(themeModeState);
  const isScreenVertical = useIsScreenVertical()

  return (
    <div
      className={clsx("flex flex-1 flex-col justify-center items-center w-full h-full p-4 sm:p-8", {
        "dark:bg-secondary-900": theme !== `light`,
        "bg-primary-A100 text-neutral-900": theme === `light`,
      })}
    >
      <div className="flex flex-1 justify-center items-center">
        <div className={isScreenVertical ? `max-w-screen-xs` : `max-w-screen-lg`}>
          <div
            className={clsx('flex flex-1', {
              "flex-col": isScreenVertical,
              "gap-8": isScreenVertical,
              "gap-16": !isScreenVertical,
            })}
          >
            <div className="flex flex-1 flex-col justify-center">
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-tight">Projects</h1>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-thin leading-tight">A glimse into my world</h2>
              <p className="mt-2 leading-loose">Here you can browse my previous experience of apps, services and more.</p>
            </div>
            <div className="flex flex-1 justify-center items-center text-neutral-900 bg-white aspect-square rounded-[25%]">
              <h1 className="text-9xl">⚠</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center absolute p-4 w-full h-full backdrop-blur-lg bg-black/50">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-tight text-center">Coming soon</h1>
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
