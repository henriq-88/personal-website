import { Container } from "packages/ui";
import { useIsScreenVertical } from "../../../utils/screen";

interface IntroSectionProps {}

const IntroSection: React.FC<IntroSectionProps> = (props) => {
  const isScreenVertical = useIsScreenVertical();

  return (
    <Container>
      <div className="mt-8 flex flex-1 items-center justify-center">
        <div
          className={isScreenVertical ? `max-w-screen-xs` : `max-w-screen-lg`}
        >
          <div className="flex flex-1 flex-col">
            <h1 className="text-5xl font-bold leading-tight sm:text-6xl md:text-8xl">
              Henrik Wassdahl
            </h1>
            <h2 className="text-4xl font-extralight leading-tight sm:text-5xl md:text-6xl">
              UX Developer
            </h2>
            <p className="mt-2 leading-loose">
              Making the world a better place - one line of code at the time.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default IntroSection;
