import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import FullPageSection from "@/components/Section/FullPage";
import { Send as SendIcon } from "@mui/icons-material";
import { useResizeDetector } from "react-resize-detector";

interface ContactSectionProps {
}

const ContactSection: React.VFC<ContactSectionProps> = (props) => {
  const { ref, width = 0, height = 0 } = useResizeDetector();

  const styles = {
    textInput: {
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
    }
  } as const;

  return (
    <FullPageSection
      id="contact"
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
            <Stack flex={1} justifyContent="center">
              <Typography variant="h1">{`Contact`}</Typography>
              <Typography variant="h2">{`Do you need help to solve a problem?`}</Typography>
              <Typography
                sx={{mt: 2}}
                lineHeight={2}
              >
                {`Let's talk bizniz and discuss your dream service/app.`}
              </Typography>
            </Stack>
            <Stack
              flex={1}
              spacing={4}
              justifyContent="center"
            >
              <TextField
                fullWidth
                type="text"
                label="Name"
                variant="filled"
                InputProps={{
                  sx: styles.textInput
                }}
                />
              <TextField
                fullWidth
                type="email"
                label="Email"
                variant="filled"
                InputProps={{
                  sx: styles.textInput
                }}
                />
              <TextField
                fullWidth
                multiline
                minRows={2}
                type="text"
                label="Message"
                variant="filled"
                InputProps={{
                  sx: styles.textInput
                }}
              />
              <Button
                disabled
                variant="contained"
                disableElevation
                size="large"
                sx={{
                  borderRadius: 3
                }}
              >
                <SendIcon sx={{
                  mr: 1,
                }} />
                <span>Hit me up</span>
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </FullPageSection>
  );
};

export default ContactSection;
