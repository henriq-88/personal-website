import ContinueButton from "@/components/ContinueButton";
import FullPageSection from "@/components/Section/FullPage";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useWindowSize } from "rooks"

interface AboutSectionProps {
}

const AboutSection: React.VFC<AboutSectionProps> = (props) => {
  const { outerWidth: width = 0, outerHeight: height = 0,  } = useWindowSize();

  return (
    <FullPageSection id="about">
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
                src="/me.jpg"
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
    </FullPageSection>
  );
};

export default AboutSection;
