import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import { useSnackbar } from "notistack";
import { httpsCallable } from "firebase/functions";
import { functions } from "../../../firebase/config";
import { LiteralUnion, RegisterOptions, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import clsx from "clsx";
import { CircularProgressIndicator } from "@wassdahl/ui";
import { useIsScreenVertical } from "../../../utils/screen";

interface ContactSectionProps {
}

type ErrorMessages = Record<keyof FormSchemaType, Partial<Record<LiteralUnion<keyof RegisterOptions, string>, string>>>

const formSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(100),
  message: z.string().min(10).max(1000),
});

type FormSchemaType = z.infer<typeof formSchema>;

const ContactSection: React.FC<ContactSectionProps> = (props) => {
  const isScreenVertical = useIsScreenVertical()
  const { enqueueSnackbar } = useSnackbar();
  const sendMessage = httpsCallable(functions, `sendMessage`);
  const { register, formState: { errors, isSubmitting }, handleSubmit, reset, } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const errorMessages: ErrorMessages = {
    name: {
      too_small: `Name must contain at least 2 characters`,
      max: `Name must contain at most 100 characters`,
    },
    email: {
      'invalid_string': `Invalid email address`,
      max: `Email must be a valid email address and contain at most 100 characters`
    },
    message: {
      too_small: `Message must contain at least 10 characters`,
      max: `Message must contain at most 1000 characters`,
    },
  }

  const handleSendEmail: SubmitHandler<FormSchemaType> = async (data) => {
    try {
      await sendMessage(data)
      enqueueSnackbar(`Message succefully sent`, {
        variant: `success`,
      });
      reset();
    } catch (err) {
      enqueueSnackbar(`Doh! Message couldn't be sent for some reason 😥`, {
        variant: `error`,
      });
    }
  };

  const isSendButtonDisabled = (isSubmitting || Object.values(errors).length > 0)

  return (
    <div className="flex flex-1 justify-center items-center p-4 sm:p-8">
      <div className={isScreenVertical ? `max-w-screen-xs` : `max-w-screen-lg`}>
        <div
          className={clsx('flex flex-1', {
            "flex-col": isScreenVertical,
            "gap-8": isScreenVertical,
            "gap-16": !isScreenVertical,
          })}
        >
          <div className="flex flex-1 flex-col justify-center">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-tight">Contact</h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-thin leading-tight">Do you need help to solve a problem?</h2>
            <p className="mt-2 leading-loose">Let's talk bizniz and discuss your dream service/app.</p>
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
                className={clsx("peer placeholder-transparent text-neutral-900 dark:text-white bg-transparent border border-solid p-3 rounded-xl w-full transition-colors outline-none outline-1 outline-offset-0", {
                  'border-red-500 focus:outline-red-500': !!errors.name,
                  'border-[#0000004f] dark:border-[#ffffff4f] focus:border-neutral-900 focus:dark:border-white hover:border-neutral-900 hover:dark:border-white focus:outline-neutral-900 focus:dark:outline-white': !errors.name,
                })}
                placeholder="Name"
              />
              <label
                htmlFor="name"
                className={clsx(`pointer-events-none absolute left-0 -top-2 mx-2 px-1 transition-all text-xs bg-white dark:bg-neutral-900 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:-top-2 peer-focus:text-xs `, {
                  'text-red-500': !!errors.name,
                  'text-neutral-900 dark:text-white peer-focus:text-neutral-900 dark:peer-focus:text-white': !errors.name,
                })}
              >
                Name
              </label>
              <p className="text-red-500 mt-1 text-xs whitespace-pre">{errors.name?.type ? errorMessages.name[errors.name.type] : ` `}</p>
            </div>
            <div className="relative mt-4">
              <input
                id="email"
                {...register(`email`)}
                className={clsx("peer placeholder-transparent text-neutral-900 dark:text-white bg-transparent border border-solid p-3 rounded-xl w-full transition-colors outline-none outline-1 outline-offset-0", {
                  'border-red-500 focus:outline-red-500': !!errors.email,
                  'border-[#0000004f] dark:border-[#ffffff4f] focus:border-neutral-900 focus:dark:border-white hover:border-neutral-900 hover:dark:border-white focus:outline-neutral-900 focus:dark:outline-white': !errors.email,
                })}
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className={clsx(`pointer-events-none absolute left-0 -top-2 mx-2 px-1 transition-all text-xs bg-white dark:bg-neutral-900 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:-top-2 peer-focus:text-xs `, {
                  'text-red-500': !!errors.email,
                  'text-neutral-900 dark:text-white peer-focus:text-neutral-900 dark:peer-focus:text-white': !errors.email,
                })}
              >
                Email
              </label>
              <p className="text-red-500 mt-1 text-xs whitespace-pre">{errors.email?.type ? errorMessages.email[errors.email.type] : ` `}</p>
            </div>
            <div className="relative mt-4">
              <textarea
                id="message"
                {...register(`message`)}
                className={clsx("peer placeholder-transparent text-neutral-900 dark:text-white bg-transparent border border-solid p-3 rounded-xl w-full transition-colors outline-none outline-1 outline-offset-0 resize-none", {
                  'border-red-500 focus:outline-red-500': !!errors.message,
                  'border-[#0000004f] dark:border-[#ffffff4f] focus:border-neutral-900 focus:dark:border-white hover:border-neutral-900 hover:dark:border-white focus:outline-neutral-900 focus:dark:outline-white': !errors.message,
                })}
                rows={3}
                placeholder="Message"
              />
              <label
                htmlFor="message"
                className={clsx(`pointer-events-none absolute left-0 -top-2 mx-2 px-1 transition-all text-xs bg-white dark:bg-neutral-900 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:-top-2 peer-focus:text-xs `, {
                  'text-red-500': !!errors.message,
                  'text-neutral-900 dark:text-white peer-focus:text-neutral-900 dark:peer-focus:text-white': !errors.message,
                })}
              >
                Message
              </label>
              <p className="text-red-500 mt-1 text-xs whitespace-pre">{errors.message?.type ? errorMessages.message[errors.message.type] : ` `}</p>
            </div>
            <button
              disabled={isSendButtonDisabled}
              className={clsx("flex justify-center items-center rounded-xl p-2 h-12 mt-4 text-white dark:text-neutral-900 font-medium uppercase transition-colors", {
                'cursor-not-allowed ': isSubmitting,
                'dark:bg-secondary-500 bg-primary-500 hover:dark:bg-secondary-500/75 hover:bg-primary-500/75': !isSubmitting && !isSendButtonDisabled,
                'bg-neutral-300 text-neutral-400 dark:bg-neutral-800 dark:text-neutral-500': isSendButtonDisabled,
              })}
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
              {isSubmitting && (
                <CircularProgressIndicator />
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;