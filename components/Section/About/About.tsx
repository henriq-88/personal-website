import ContinueButton from "@/components/ContinueButton";
import FullPageSection from "@/components/Section/FullPage";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useResizeDetector } from "react-resize-detector";

interface AboutSectionProps {
}

const AboutSection: React.VFC<AboutSectionProps> = (props) => {
  const { ref, width = 0, height = 0 } = useResizeDetector();

  return (
    <FullPageSection
      id="about"
      ref={ref}
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
            spacing={8}
            flex={1}
          >
            <Box
              flex={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img
                alt="picture of me"
                src="https://wassdahl.dev/me.jpg"
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
        bottom={24}
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
    </FullPageSection>
  );
};

export default AboutSection;
