import Image from "next/image";
import MeImage from "../../../assets/images/me.jpg";
import clsx from "clsx";
import { useIsScreenVertical } from "../../../utils/screen";
import { Container } from "packages/ui";

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = (props) => {
  const isScreenVertical = useIsScreenVertical();

  return (
    <Container className="flex h-full items-center justify-center">
      <div className={isScreenVertical ? `max-w-screen-xs` : `max-w-screen-lg`}>
        <div
          className={clsx("flex flex-1", {
            "flex-col": isScreenVertical,
            "gap-8": isScreenVertical,
            "gap-16": !isScreenVertical,
          })}
        >
          <div className="flex flex-1 items-center justify-center">
            <Image
              alt="picture of me"
              className="aspect-square w-full rounded-xl grayscale"
              src={MeImage}
              width={512}
              height={512}
              style={{
                maxWidth: 512,
              }}
            />
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <h1 className="text-5xl font-bold leading-tight sm:text-6xl md:text-8xl">
              About
            </h1>
            <h2 className="text-4xl font-extralight leading-tight sm:text-5xl md:text-6xl">
              Nomad living in Seoul
            </h2>
            <p className="mt-2 leading-loose">
              I'm Henrik, a Frontend Engineer with a Bachelor's in Computer
              Science and a Master's in UX. I'm experienced in developing mobile
              apps as well as web apps. This also includes optimized Backend
              communication with the apps.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutPage;
