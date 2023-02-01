import { TextField } from "@mui/material";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import { useWindowSize } from "rooks";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { httpsCallable } from "firebase/functions";
import { functions } from "@/firebase/config";
import clsx from "clsx";

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

  const isSendButtonDisabled = (sendLoading || (!name || !email || !message))

  return (
    <div className="flex flex-1 justify-center items-center">
      <div className={width < height ? `max-w-screen-xs` : `max-w-screen-lg`}>
        <div
          className={clsx('flex flex-1', {
            "flex-col": width < height,
            "gap-8": width < height,
            "gap-16": width >= height,
          })}
        >
          <div className="flex flex-1 flex-col justify-center">
            <h1 className="text-8xl font-bold leading-tight">{`Contact`}</h1>
            <h2 className="text-6xl font-thin leading-tight">{`Do you need help to solve a problem?`}</h2>
            <p className="mt-2 leading-loose">{`Let's talk bizniz and discuss your dream service/app.`}</p>
          </div>
          <div className="flex flex-1 flex-col gap-8 justify-center">
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
            <button
              disabled={isSendButtonDisabled}
              className={clsx("flex justify-center items-center rounded-xl p-2 h-12 text-white font-medium uppercase transition-colors", {
                'cursor-not-allowed ': sendLoading,
                'dark:bg-secondary-500 bg-primary-500 hover:dark:bg-secondary-500/75 hover:bg-primary-500/75': !sendLoading && !isSendButtonDisabled,
                'bg-neutral-300 text-neutral-400 dark:bg-neutral-800 dark:text-neutral-500': isSendButtonDisabled,
              })}
              onClick={handleSendEmail}
            >
              <PaperAirplaneIcon
                className="h-6 w-6 text-current ltr:mr-2 rtl:ml-2"
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
                <svg className="animate-spin h-5 w-5 absolute text-white" viewBox="0 0 24 24">
                  <circle className="opacity-10" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
