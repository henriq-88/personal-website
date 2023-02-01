import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import ContinueButton from "@/components/ContinueButton";
import { useWindowSize } from "rooks";
import Image from "next/image";

interface ProjectsSectionProps {
}

const ProjectsSection: React.FC<ProjectsSectionProps> = (props) => {
  const theme = useTheme();
  const { outerWidth, outerHeight, } = useWindowSize();
  const width = outerWidth ?? 0
  const height = outerHeight ?? 0

  return (
    <Stack
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flex={1}
      p={4}
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
        <div className={width < height ? `max-w-screen-xs` : `max-w-screen-lg`}>
          <Stack
            direction={width < height ? `column` : `row`}
            spacing={width < height ? 4 : 8}
            flex={1}
          >
            <Stack
              flex={1}
              justifyContent="center"
            >
              <h1 className="text-8xl font-bold leading-tight">Projects</h1>
              <h2 className="text-6xl font-thin leading-tight">A glimse into my world</h2>
              <p className="mt-2 leading-loose">Here you can browse my previous experience of apps, services and more.</p>
            </Stack>
            <Box
              flex={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
              position={`relative`}
            >
              <Image
                width={512}
                height={512}
                alt="dancing banana gif"
                src="https://c.tenor.com/ZgbW9V5PKoMAAAAC/banana-dance-dancing-banana.gif"
                style={{
                  borderRadius: `25%`,
                  maxWidth: 512,
                  aspectRatio: `1`,
                  width: `100%`,
                }}
              />
            </Box>
          </Stack>
        </div>
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
    </Stack>
  );
};

export default ProjectsSection;
