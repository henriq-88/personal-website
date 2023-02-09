import ContinueButton from "../../../components/ContinueButton";
import StackOverflowIcon from "../../../components/Icons/StackOverflow";
import GitHubIcon from "../../../components/Icons/GitHub";
import LinkedInIcon from "../../../components/Icons/LinkedIn";
import { useIsScreenVertical } from "../../../utils/screen";

interface IntroSectionProps {}

const IntroSection: React.FC<IntroSectionProps> = (props) => {
  const isScreenVertical = useIsScreenVertical();

  return (
    <div className="flex h-full w-full flex-1 flex-col items-center justify-center bg-secondary-A100 p-4 text-neutral-900 dark:bg-primary-900 dark:text-white sm:p-8">
      <div className="mt-8 flex flex-1 items-center justify-center">
        <div
          className={isScreenVertical ? `max-w-screen-xs` : `max-w-screen-lg`}
        >
          <div className="flex flex-1 flex-col">
            <h1 className="text-5xl font-bold leading-tight sm:text-6xl md:text-8xl">
              Henrik Wassdahl
            </h1>
            <h2 className="text-4xl font-thin leading-tight sm:text-5xl md:text-6xl">
              UX Developer
            </h2>
            <p className="mt-2 leading-loose">
              Making the world a better place - one line of code at the time.
            </p>
            <div className="mt-4 flex gap-4">
              <a
                className="rounded-xl border border-solid border-[#0000001f] bg-transparent p-2 transition-colors hover:bg-[#00000014] dark:border-[#ffffff1f] hover:dark:bg-[#ffffff14]"
                type="anchor"
                href="https://github.com/henriq-88"
                target="_blank"
                aria-label="github profile"
              >
                <GitHubIcon className="h-6 w-6 text-current" />
              </a>
              <a
                className="rounded-xl border border-solid border-[#0000001f] bg-transparent p-2 transition-colors hover:bg-[#00000014] dark:border-[#ffffff1f] hover:dark:bg-[#ffffff14]"
                type="anchor"
                href="https://www.linkedin.com/in/henrikwassdahl"
                target="_blank"
                aria-label="linkedin profile"
              >
                <LinkedInIcon className="h-6 w-6 text-current" />
              </a>
              <a
                className="rounded-xl border border-solid border-[#0000001f] bg-transparent p-2 transition-colors hover:bg-[#00000014] dark:border-[#ffffff1f] hover:dark:bg-[#ffffff14]"
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
      <div className="mt-8 flex w-full justify-center">
        <ContinueButton targetId="about" label="About" />
      </div>
    </div>
  );
};

export default IntroSection;
