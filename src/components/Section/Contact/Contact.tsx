import { Box, Button, CircularProgress, Container, Stack, TextField, Typography } from "@mui/material";
import FullPageSection from "@/components/Section/FullPage";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import { useWindowSize } from "rooks";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { httpsCallable } from "firebase/functions";
import { functions } from "@/firebase/config";

interface ContactSectionProps {
}

const ContactSection: React.FC<ContactSectionProps> = (props) => {
  const { outerWidth, outerHeight, } = useWindowSize();
  const width = outerWidth ?? 0
  const height = outerHeight ?? 0
  const { enqueueSnackbar } = useSnackbar();
  const sendMessage = httpsCallable(functions, `sendMessage`);

  const [ name, setName ] = useState(``);
  const [ email, setEmail ] = useState(``);
  const [ message, setMessage ] = useState(``);
  const [ sendLoading, setLoadingSend ] = useState(false);

  const sendEmail = async () => {
    if (sendLoading) return;
    setLoadingSend(true);
    try {
      await sendMessage({
        name,
        email,
        message,
      })
      setName(``);
      setEmail(``);
      setMessage(``);
      enqueueSnackbar(`Message succefully sent`, {
        variant: `success`,
      });
    } catch (err) {
      enqueueSnackbar(`Doh! Message couldn't be sent for some reason 😥`, {
        variant: `error`,
      });
    }
    setLoadingSend(false);
  };

  const handleSendEmail: React.MouseEventHandler<HTMLButtonElement> = () => {
    void sendEmail();
  }

  return (
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
              value={name}
              fullWidth
              type="text"
              label="Name"
              variant="filled"
              onChange={(event) => setName(event.currentTarget.value)}
              />
            <TextField
              value={email}
              fullWidth
              type="email"
              label="Email"
              variant="filled"
              onChange={(event) => setEmail(event.currentTarget.value)}
              />
            <TextField
              value={message}
              fullWidth
              multiline
              minRows={2}
              type="text"
              label="Message"
              variant="filled"
              onChange={(event) => setMessage(event.currentTarget.value)}
            />
            <Button
              disabled={sendLoading || (!name || !email || !message)}
              variant="contained"
              disableElevation
              size="large"
              onClick={handleSendEmail}
            >
              <PaperAirplaneIcon
                className="h-6 w-6 text-current mr-1"
                style={{
                  visibility: sendLoading ? `hidden` : `visible`,
                }}
              />
              <span
                style={{
                  visibility: sendLoading ? `hidden` : `visible`,
                }}
              >
                Hit me up
              </span>
              {sendLoading && (
                <CircularProgress
                  size={24}
                  color="inherit"
                  sx={{
                    position: `absolute`
                  }}
                />
              )}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactSection;
