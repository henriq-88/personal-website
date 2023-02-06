import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import { httpsCallable } from "firebase/functions";
import { functions } from "../../../firebase/config";
import {
  LiteralUnion,
  RegisterOptions,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import clsx from "clsx";
import { CircularProgressIndicator } from "@wassdahl/ui";
import { useIsScreenVertical } from "../../../utils/screen";

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

  const isSendButtonDisabled = isSubmitting || Object.values(errors).length > 0;

  return (
    <div className="flex flex-1 items-center justify-center p-4 sm:p-8">
      <div className={isScreenVertical ? `max-w-screen-xs` : `max-w-screen-lg`}>
        <div
          className={clsx("flex flex-1", {
            "flex-col": isScreenVertical,
            "gap-8": isScreenVertical,
            "gap-16": !isScreenVertical,
          })}
        >
          <div className="flex flex-1 flex-col justify-center">
            <h1 className="text-5xl font-bold leading-tight sm:text-6xl md:text-8xl">
              Contact
            </h1>
            <h2 className="text-4xl font-thin leading-tight sm:text-5xl md:text-6xl">
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
            <div className="relative">
              <input
                id="name"
                {...register(`name`)}
                className={clsx(
                  "peer w-full rounded-xl border border-solid bg-transparent p-3 text-neutral-900 placeholder-transparent outline-none outline-1 outline-offset-0 transition-colors dark:text-white",
                  {
                    "border-red-500 focus:outline-red-500": !!errors.name,
                    "border-[#0000004f] hover:border-neutral-900 focus:border-neutral-900 focus:outline-neutral-900 dark:border-[#ffffff4f] hover:dark:border-white focus:dark:border-white focus:dark:outline-white":
                      !errors.name,
                  },
                )}
                placeholder="Name"
              />
              <label
                htmlFor="name"
                className={clsx(
                  `pointer-events-none absolute left-0 -top-2 mx-2 bg-white px-1 text-xs transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs dark:bg-neutral-900 `,
                  {
                    "text-red-500": !!errors.name,
                    "text-neutral-900 peer-focus:text-neutral-900 dark:text-white dark:peer-focus:text-white":
                      !errors.name,
                  },
                )}
              >
                Name
              </label>
              <p className="mt-1 whitespace-pre text-xs text-red-500">
                {errors.name?.type ? errorMessages.name[errors.name.type] : ` `}
              </p>
            </div>
            <div className="relative mt-4">
              <input
                id="email"
                {...register(`email`)}
                className={clsx(
                  "peer w-full rounded-xl border border-solid bg-transparent p-3 text-neutral-900 placeholder-transparent outline-none outline-1 outline-offset-0 transition-colors dark:text-white",
                  {
                    "border-red-500 focus:outline-red-500": !!errors.email,
                    "border-[#0000004f] hover:border-neutral-900 focus:border-neutral-900 focus:outline-neutral-900 dark:border-[#ffffff4f] hover:dark:border-white focus:dark:border-white focus:dark:outline-white":
                      !errors.email,
                  },
                )}
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className={clsx(
                  `pointer-events-none absolute left-0 -top-2 mx-2 bg-white px-1 text-xs transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs dark:bg-neutral-900 `,
                  {
                    "text-red-500": !!errors.email,
                    "text-neutral-900 peer-focus:text-neutral-900 dark:text-white dark:peer-focus:text-white":
                      !errors.email,
                  },
                )}
              >
                Email
              </label>
              <p className="mt-1 whitespace-pre text-xs text-red-500">
                {errors.email?.type
                  ? errorMessages.email[errors.email.type]
                  : ` `}
              </p>
            </div>
            <div className="relative mt-4">
              <textarea
                id="message"
                {...register(`message`)}
                className={clsx(
                  "peer w-full resize-none rounded-xl border border-solid bg-transparent p-3 text-neutral-900 placeholder-transparent outline-none outline-1 outline-offset-0 transition-colors dark:text-white",
                  {
                    "border-red-500 focus:outline-red-500": !!errors.message,
                    "border-[#0000004f] hover:border-neutral-900 focus:border-neutral-900 focus:outline-neutral-900 dark:border-[#ffffff4f] hover:dark:border-white focus:dark:border-white focus:dark:outline-white":
                      !errors.message,
                  },
                )}
                rows={3}
                placeholder="Message"
              />
              <label
                htmlFor="message"
                className={clsx(
                  `pointer-events-none absolute left-0 -top-2 mx-2 bg-white px-1 text-xs transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs dark:bg-neutral-900 `,
                  {
                    "text-red-500": !!errors.message,
                    "text-neutral-900 peer-focus:text-neutral-900 dark:text-white dark:peer-focus:text-white":
                      !errors.message,
                  },
                )}
              >
                Message
              </label>
              <p className="mt-1 whitespace-pre text-xs text-red-500">
                {errors.message?.type
                  ? errorMessages.message[errors.message.type]
                  : ` `}
              </p>
            </div>
            <button
              disabled={isSendButtonDisabled}
              className={clsx(
                "mt-4 flex h-12 items-center justify-center rounded-xl p-2 font-medium uppercase text-white transition-colors dark:text-neutral-900",
                {
                  "cursor-not-allowed ": isSubmitting,
                  "bg-primary-500 hover:bg-primary-500/75 dark:bg-secondary-500 hover:dark:bg-secondary-500/75":
                    !isSubmitting && !isSendButtonDisabled,
                  "bg-neutral-300 text-neutral-400 dark:bg-neutral-800 dark:text-neutral-500":
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
      </div>
    </div>
  );
};

export default ContactSection;
