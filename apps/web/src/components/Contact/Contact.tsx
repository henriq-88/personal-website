import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import { httpsCallable } from "firebase/functions";
import { functions } from "../../firebase/config";
import {
  LiteralUnion,
  RegisterOptions,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import clsx from "clsx";
import {
  CircularProgressIndicator,
  Container,
  TextArea,
  TextField,
} from "@wassdahl/ui";
import { useIsScreenVertical } from "../../utils/screen";

interface ContactSectionProps {}

type ErrorMessages = Record<
  keyof FormSchemaType,
  Partial<Record<LiteralUnion<keyof RegisterOptions, string>, string>>
>;

const formSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(100),
  message: z.string().min(10).max(1000),
});

type FormSchemaType = z.infer<typeof formSchema>;

const ContactSection: React.FC<ContactSectionProps> = (props) => {
  const isScreenVertical = useIsScreenVertical();
  const sendMessage = httpsCallable(functions, `sendMessage`);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const errorMessages: ErrorMessages = {
    name: {
      too_small: `Name must contain at least 2 characters`,
      max: `Name must contain at most 100 characters`,
    },
    email: {
      invalid_string: `Invalid email address`,
      max: `Email must be a valid email address and contain at most 100 characters`,
    },
    message: {
      too_small: `Message must contain at least 10 characters`,
      max: `Message must contain at most 1000 characters`,
    },
  };

  const handleSendEmail: SubmitHandler<FormSchemaType> = async (data) => {
    try {
      await sendMessage(data);
      toast(`Message succefully sent`, {
        type: `success`,
      });
      reset();
    } catch (err) {
      toast(`Doh! Message couldn't be sent for some reason 😥`, {
        type: `error`,
      });
    }
  };

  const hasErrors = Object.values(errors).length > 0;
  const isSendButtonDisabled = isSubmitting || hasErrors;

  return (
    <Container className="flex h-full items-center justify-center">
      <div
        className={clsx("flex", {
          "max-w-screen-xs flex-col gap-8": isScreenVertical,
          "max-w-screen-lg gap-16": !isScreenVertical,
        })}
      >
        <div className="flex flex-1 flex-col justify-center">
          <h1 className="text-5xl font-bold leading-tight sm:text-6xl md:text-8xl">
            Contact
          </h1>
          <h2 className="text-4xl font-extralight leading-tight sm:text-5xl md:text-6xl">
            Do you need help to solve a problem?
          </h2>
          <p className="mt-2 leading-loose">
            Let's talk bizniz and discuss your dream service/app.
          </p>
        </div>
        <form
          className="flex flex-1 flex-col justify-center"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={handleSubmit(handleSendEmail)}
        >
          <TextField
            id="name"
            {...register(`name`)}
            type="text"
            label="Name"
            error={
              errors.name?.type
                ? errorMessages.name[errors.name.type]
                : undefined
            }
          />
          <TextField
            id="email"
            {...register(`email`)}
            type="text"
            label="Email"
            error={
              errors.email?.type
                ? errorMessages.email[errors.email.type]
                : undefined
            }
          />
          <TextArea
            id="message"
            {...register(`message`)}
            label="Message"
            rows={3}
            error={
              errors.message?.type
                ? errorMessages.message[errors.message.type]
                : undefined
            }
          />
          <button
            disabled={isSendButtonDisabled}
            className={clsx(
              "mt-4 flex h-12 items-center justify-center rounded-xl p-2 font-medium uppercase transition-all ",
              {
                "cursor-not-allowed": hasErrors,
                "cursor-progress": isSubmitting,
                "bg-violet-600 text-white hover:scale-105 dark:bg-violet-800":
                  !isSendButtonDisabled,
                "bg-violet-600/30 text-neutral-300 dark:bg-violet-800/30 dark:text-neutral-500":
                  isSendButtonDisabled,
              },
            )}
          >
            <PaperAirplaneIcon
              className="h-6 w-6 text-current ltr:mr-2 rtl:ml-2"
              style={{
                visibility: isSubmitting ? `hidden` : `visible`,
              }}
            />
            <span
              style={{
                visibility: isSubmitting ? `hidden` : `visible`,
              }}
            >
              Hit me up
            </span>
            {isSubmitting && <CircularProgressIndicator />}
          </button>
        </form>
      </div>
    </Container>
  );
};

export default ContactSection;
