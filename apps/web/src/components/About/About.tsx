import Image from "next/image";
import MeImage from "../../assets/images/me.jpg";
import { Container } from "@wassdahl/ui";
import { Reveal } from "react-awesome-reveal";
import Signature from "../Signature";

const AboutPage: React.FC = () => {
  return (
    <Container className="flex h-full items-center justify-center p-3">
      <div className="md:max-w-screen-lg portrait:max-w-screen-xs">
        <div className="flex flex-1 gap-8 portrait:flex-col landscape:flex-row">
          <div className="relative flex flex-1 items-center justify-center">
            <Reveal from={{ opacity: 0 }} duration={2000} className="h-full w-full">
              <Image
                priority
                alt="picture of me"
                className="aspect-square w-full rounded-xl grayscale"
                src={MeImage}
              />
            </Reveal>
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <Reveal from="bottom" delay={200}>
              <h1 className="text-5xl font-bold leading-tight sm:text-6xl md:text-8xl">
                About
              </h1>
            </Reveal>
            <Reveal from="bottom" delay={400}>
              <h2 className="text-4xl font-extralight leading-tight sm:text-5xl md:text-6xl">
                Nomad living in Seoul
              </h2>
            </Reveal>
            <Reveal from="bottom" delay={600}>
              <p className="mt-2 leading-loose">
                {`I'm Henrik, a Frontend Engineer with a Bachelor's in Computer
                Science and a Master's in UX. I'm experienced in developing
                mobile apps as well as web apps. This also includes optimized
                Backend communication with the apps.`}
              </p>
            </Reveal>
            <Signature className="mt-6 w-48" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutPage;
