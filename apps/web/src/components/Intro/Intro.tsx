import { Container } from "@wassdahl/ui";
import { Reveal } from "react-awesome-reveal";

const IntroPage: React.FC = () => {
  return (
    <Container className="h-full p-3">
      <div className="flex h-full flex-1 items-center justify-center">
        <div className="md:max-w-screen-lg portrait:max-w-screen-xs">
          <div className="flex flex-1 flex-col">
            <Reveal from="bottom">
              <h1 className="text-5xl font-bold leading-tight sm:text-6xl md:text-8xl">
                Henrik Wassdahl
              </h1>
            </Reveal>
            <Reveal from="bottom" delay={200}>
              <h2 className="text-4xl font-extralight leading-tight sm:text-5xl md:text-6xl">
                UX Developer
              </h2>
            </Reveal>
            <Reveal from="bottom" delay={400}>
              <p className="mt-2 leading-loose">
                Making the world a better place - one line of code at the time.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default IntroPage;
