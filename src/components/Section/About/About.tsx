import ContinueButton from "@/components/ContinueButton";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useWindowSize } from "rooks"
import MeImage from "@/assets/images/me.jpg"

interface AboutSectionProps {
}

const AboutSection: React.FC<AboutSectionProps> = (props) => {
  const { outerWidth, outerHeight, } = useWindowSize();
  const width = outerWidth ?? 0
  const height = outerHeight ?? 0

  return (
    <div className="flex flex-1 flex-col justify-center items-center w-full h-full p-8">
      <div className="flex flex-1 justify-center items-center">
        <div className={width < height ? `max-w-screen-xs` : `max-w-screen-lg`}>
          <Stack
            direction={width < height ? `column` : `row`}
            spacing={width < height ? 4 : 8}
            flex={1}
          >
            <Box
              flex={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
              position={`relative`}
              
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
            </Box>
            <Stack
              flex={1}
              justifyContent="center"
            >
              <h1 className="text-8xl font-bold leading-tight">{`About`}</h1>
              <h2 className="text-6xl font-thin leading-tight">{`Nomad living in Seoul`}</h2>
              <p className="mt-2 leading-loose">{`I'm Henrik, a Frontend Engineer with a Bachelor's in Computer Science and a Master's in UX. I'm experienced in developing mobile apps as well as web apps. This also includes optimized Backend communication with the apps.`}</p>
            </Stack>
          </Stack>
        </div>
      </div>
      <Box
        mt={4}
        display="flex"
        justifyContent="center"
        width="100%"
      >
        <ContinueButton
          targetId="projects"
          label="Projects"
        />
      </Box>
    </div>
  );
};

export default AboutSection;
