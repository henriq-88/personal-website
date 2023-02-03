import ContinueButton from "@/components/ContinueButton";
import Image from "next/image";
import MeImage from "@/assets/images/me.jpg"
import clsx from "clsx";
import { useIsScreenVertical } from "@/utils/screen";

interface AboutSectionProps {
}

const AboutSection: React.FC<AboutSectionProps> = (props) => {
  const isScreenVertical = useIsScreenVertical()

  return (
    <div className="flex flex-1 flex-col justify-center items-center w-full h-full p-8">
      <div className="flex flex-1 justify-center items-center">
        <div className={isScreenVertical ? `max-w-screen-xs` : `max-w-screen-lg`}>
          <div
            className={clsx('flex flex-1', {
              "flex-col": isScreenVertical,
              "gap-8": isScreenVertical,
              "gap-16": !isScreenVertical,
            })}
          >
            <div
              className="flex flex-1 justify-center items-center"
            >
              <Image
                alt="picture of me"
                src={MeImage}
                width={512}
                height={512}
                style={{
                  borderRadius: `25%`,
                  width: `100%`,
                  aspectRatio: `1/1`,
                  maxWidth: 512,
                }}
              />
            </div>
            <div className="flex flex-1 flex-col justify-center">
              <h1 className="text-8xl font-bold leading-tight">About</h1>
              <h2 className="text-6xl font-thin leading-tight">Nomad living in Seoul</h2>
              <p className="mt-2 leading-loose">I'm Henrik, a Frontend Engineer with a Bachelor's in Computer Science and a Master's in UX. I'm experienced in developing mobile apps as well as web apps. This also includes optimized Backend communication with the apps.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-8 justify-center items-center w-full">
        <ContinueButton
          targetId="projects"
          label="Projects"
        />
      </div>
    </div>
  );
};

export default AboutSection;
