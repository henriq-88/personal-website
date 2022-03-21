import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import FullPageSection from "@/components/Section/FullPage";
import { Send as SendIcon } from "@mui/icons-material";
import { useWindowSize } from "rooks";

interface ContactSectionProps {
}

const ContactSection: React.VFC<ContactSectionProps> = (props) => {
  const { outerWidth: width = 0, outerHeight: height = 0,  } = useWindowSize();

  return (
    <FullPageSection id="contact">
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
                />
              <TextField
                fullWidth
                type="email"
                label="Email"
                variant="filled"
                />
              <TextField
                fullWidth
                multiline
                minRows={2}
                type="text"
                label="Message"
                variant="filled"
              />
              <Button
                disabled
                variant="contained"
                disableElevation
                size="large"
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
