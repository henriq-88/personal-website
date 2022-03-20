import { Box, Button, Container, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import FullPageSection from "@/components/Section/FullPage";
import ContinueButton from "@/components/ContinueButton";
import StackOverflowIcon from "@/components/Icons/StackOverflow";
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon } from "@mui/icons-material";
import { useResizeDetector } from "react-resize-detector";

interface IntroSectionProps {
}

const IntroSection: React.VFC<IntroSectionProps> = (props) => {
  const theme = useTheme();
  const { ref, width = 0, height = 0 } = useResizeDetector();
  return (
    <FullPageSection
      ref={ref}
      id="intro"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: theme.palette.mode === `dark` ? `#24133D` : deepOrange[`A100`]
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flex={1}
      >
        <Container maxWidth={width < height ? `sm` : `lg`}>
          <Stack flex={1}>
            <Typography variant="h1">Henrik Wassdahl</Typography>
            <Typography variant="h2">UX Developer</Typography>
            <Typography
              sx={{
                mt: 2
              }}
              lineHeight={2}
            >
              Making the world a better place - one line of code at the time.
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                mt: 2
              }}
            >
              <Button
                variant="outlined"
                color="inherit"
                href="https://github.com/henriq-88"
                target="_blank"
                sx={{
                  minWidth: 0,
                  p: 1,
                  borderRadius: `25%`,
                  borderColor: `rgba(currentColor, 0.2)`
                }}
              >
                <GitHubIcon />
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                href="https://www.linkedin.com/in/henrikwassdahl/"
                target="_blank"
                sx={{
                  minWidth: 0,
                  p: 1,
                  borderRadius: `25%`,
                }}
              >
                <LinkedInIcon />
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                href="https://stackoverflow.com/users/2375978/henrik-wassdahl"
                target="_blank"
                sx={{
                  minWidth: 0,
                  p: 1,
                  borderRadius: `25%`,
                }}
              >
                <StackOverflowIcon />
              </Button>
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
          targetId="about"
          label="About"
        />
      </Box>
    </FullPageSection>
  );
};

export default IntroSection;
