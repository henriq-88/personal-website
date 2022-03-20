import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import FullPageSection from "@/components/Section/FullPage";
import ContinueButton from "@/components/ContinueButton";
import { useResizeDetector } from 'react-resize-detector';

interface ProjectsSectionProps {
}

const ProjectsSection: React.VFC<ProjectsSectionProps> = (props) => {
  const theme = useTheme();
  const { ref, width = 0, height = 0 } = useResizeDetector();

  return (
    <FullPageSection
      ref={ref}
      id="projects"
      position="relative"
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
            spacing={8}
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
              <img
                src="https://c.tenor.com/ZgbW9V5PKoMAAAAC/banana-dance-dancing-banana.gif"
                style={{
                  borderRadius: `25%`,
                  width: `100%`,
                  aspectRatio: `1/1`,
                  maxWidth: 512,
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
        bottom={24}
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
