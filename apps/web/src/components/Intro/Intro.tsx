import { Container } from "@wassdahl/ui";
import { Fade } from "react-awesome-reveal";

interface IntroPageProps {}

const IntroPage: React.FC<IntroPageProps> = (props) => {
  return (
    <Container className="h-full p-3">
      <div className="flex h-full flex-1 items-center justify-center">
        <div className="md:max-w-screen-lg portrait:max-w-screen-xs">
          <div className="flex flex-1 flex-col">
            <Fade direction="up" triggerOnce>
              <h1 className="text-5xl font-bold leading-tight sm:text-6xl md:text-8xl">
                Henrik Wassdahl
              </h1>
            </Fade>
            <Fade direction="up" triggerOnce delay={200}>
              <h2 className="text-4xl font-extralight leading-tight sm:text-5xl md:text-6xl">
                UX Developer
              </h2>
            </Fade>
            <Fade direction="up" triggerOnce delay={400}>
              <p className="mt-2 leading-loose">
                Making the world a better place - one line of code at the time.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default IntroPage;
