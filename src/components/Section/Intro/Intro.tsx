import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import ContinueButton from "@/components/ContinueButton";
import { useWindowSize } from "rooks";
import StackOverflowIcon from "@/components/Icons/StackOverflow";
import GitHubIcon from "@/components/Icons/GitHub";
import LinkedInIcon from "@/components/Icons/LinkedIn";

interface IntroSectionProps {
}

const IntroSection: React.FC<IntroSectionProps> = (props) => {
  const theme = useTheme();
  const { outerWidth, outerHeight, } = useWindowSize();
  const width = outerWidth ?? 0
  const height = outerHeight ?? 0

  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={4}
      sx={{
        backgroundColor: theme.palette.mode === `dark` ? `#24133D` : deepOrange[`A100`]
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flex={1}
        mt={4}
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

              <a
                className="rounded-xl border border-solid border-[#ffffff1f] p-2 bg-transparent hover:bg-[#ffffff14] transition-colors"
                type="anchor"
                href="https://github.com/henriq-88"
                target="_blank"
                aria-label="github profile"
              >
                <GitHubIcon className="h-6 w-6 text-current" />
              </a>
              <a
                className="rounded-xl border border-solid border-[#ffffff1f] p-2 bg-transparent hover:bg-[#ffffff14] transition-colors"
                type="anchor"
                href="https://www.linkedin.com/in/henrikwassdahl"
                target="_blank"
                aria-label="linkedin profile"
              >
                <LinkedInIcon className="h-6 w-6 text-current" />
              </a>
              <a
                className="rounded-xl border border-solid border-[#ffffff1f] p-2 bg-transparent hover:bg-[#ffffff14] transition-colors"
                type="anchor"
                href="https://stackoverflow.com/users/2375978/henrik-wassdahl"
                target="_blank"
                aria-label="stackoverflow profile"
              >
                <StackOverflowIcon className="h-6 w-6 text-current" />
              </a>
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
          targetId="about"
          label="About"
        />
      </Box>
    </Box>
  );
};

export default IntroSection;
