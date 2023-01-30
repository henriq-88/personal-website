import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import FullPageSection from "@/components/Section/FullPage";
import ContinueButton from "@/components/ContinueButton";
import { useWindowSize } from "rooks";
import Image from "next/image";

interface ProjectsSectionProps {
}

const ProjectsSection: React.VFC<ProjectsSectionProps> = (props) => {
  const theme = useTheme();
  const { outerWidth, outerHeight, } = useWindowSize();
  const width = outerWidth ?? 0
  const height = outerHeight ?? 0

  return (
    <FullPageSection
      id="projects"
      sx={{
        backgroundColor: theme.palette.mode === `dark` ? `#491607` : deepPurple[`A100`]
      }}
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
            <Stack
              flex={1}
              justifyContent="center"
            >
              <Typography variant="h1">{`Projects`}</Typography>
              <Typography variant="h2">{`A glimse into my world`}</Typography>
              <Typography
                sx={{
                  mt: 2
                }}
                lineHeight={2}
              >
                {`Here you can browse my previous experience of apps, services and more.`}
              </Typography>
            </Stack>
            <Box
              flex={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                alt="dancing banana gif"
                src="https://c.tenor.com/ZgbW9V5PKoMAAAAC/banana-dance-dancing-banana.gif"
                style={{
                  borderRadius: `25%`,
                  maxWidth: 512,
                  width: `100%`,
                }}
              />
            </Box>
          </Stack>
        </Container>
      </Box>
      <Box
        position="absolute"
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={2}
        sx={{
          width: `100%`,
          height: `100%`,
          backgroundColor: `rgba(0, 0, 0, 0.5)`,
          backdropFilter: `blur(16px)`,
        }}
      >
        <Typography
          variant="h1"
          textAlign="center"
        >
          ⚠ Coming soon ⚠
        </Typography>
      </Box>
      <Box
        mt={4}
        display="flex"
        justifyContent="center"
        width="100%"
      >
        <ContinueButton
          targetId="contact"
          label="Contact"
        />
      </Box>
    </FullPageSection>
  );
};

export default ProjectsSection;
