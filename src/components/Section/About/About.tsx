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
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection={`column`}
      width="100%"
      height="100%"
      flex={1}
      p={4}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flex={1}
      >
        <Container maxWidth={width < height ? `sm` : `lg`}>
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
              <Typography variant="h1">{`About`}</Typography>
              <Typography variant="h2">{`Nomad living in Seoul`}</Typography>
              <Typography
                sx={{
                  mt: 2,
                }}
                lineHeight={2}
              >{`I'm Henrik, a Frontend Engineer with a Bachelor's in Computer Science and a Master's in UX. I'm experienced in developing mobile apps as well as web apps. This also includes optimized Backend communication with the apps.`}</Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>
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
    </Box>
  );
};

export default AboutSection;
