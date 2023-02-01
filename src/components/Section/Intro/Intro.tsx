import ContinueButton from "@/components/ContinueButton";
import { useWindowSize } from "rooks";
import StackOverflowIcon from "@/components/Icons/StackOverflow";
import GitHubIcon from "@/components/Icons/GitHub";
import LinkedInIcon from "@/components/Icons/LinkedIn";
import { useAtomValue } from "jotai";
import { themeModeState } from "@/state/states";
import clsx from "clsx";

interface IntroSectionProps {
}

const IntroSection: React.FC<IntroSectionProps> = (props) => {
  const theme = useAtomValue(themeModeState)
  const { outerWidth, outerHeight, } = useWindowSize();
  const width = outerWidth ?? 0
  const height = outerHeight ?? 0

  return (
    <div
      className={clsx("flex flex-1 flex-col justify-center items-center w-full h-full p-8", {
        "dark:bg-primary-900": theme !== `light`,
        "bg-secondary-A100 text-neutral-900": theme === `light`,
      })}
    >
      <div className="flex flex-1 justify-center items-center mt-8">
        <div className={width < height ? `max-w-screen-xs` : `max-w-screen-lg`}>
          <div className="flex flex-1 flex-col">
            <h1 className="text-8xl font-bold leading-tight">Henrik Wassdahl</h1>
            <h2 className="text-6xl font-thin leading-tight">UX Developer</h2>
            <p className="mt-2 leading-loose">Making the world a better place - one line of code at the time.</p>
            <div className="flex gap-4 mt-4">
              <a
                className="rounded-xl border border-solid border-[#0000001f] dark:border-[#ffffff1f] p-2 bg-transparent hover:bg-[#00000014] hover:dark:bg-[#ffffff14] transition-colors"
                type="anchor"
                href="https://github.com/henriq-88"
                target="_blank"
                aria-label="github profile"
              >
                <GitHubIcon className="h-6 w-6 text-current" />
              </a>
              <a
                className="rounded-xl border border-solid border-[#0000001f] dark:border-[#ffffff1f] p-2 bg-transparent hover:bg-[#00000014] hover:dark:bg-[#ffffff14] transition-colors"
                type="anchor"
                href="https://www.linkedin.com/in/henrikwassdahl"
                target="_blank"
                aria-label="linkedin profile"
              >
                <LinkedInIcon className="h-6 w-6 text-current" />
              </a>
              <a
                className="rounded-xl border border-solid border-[#0000001f] dark:border-[#ffffff1f] p-2 bg-transparent hover:bg-[#00000014] hover:dark:bg-[#ffffff14] transition-colors"
                type="anchor"
                href="https://stackoverflow.com/users/2375978/henrik-wassdahl"
                target="_blank"
                aria-label="stackoverflow profile"
              >
                <StackOverflowIcon className="h-6 w-6 text-current" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full mt-8">
        <ContinueButton
          targetId="about"
          label="About"
        />
      </div>
    </div>
  );
};

export default IntroSection;
