import clsx from "clsx";
import { forwardRef } from "react";

interface TextAreaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label: string;
  error?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const { label, error, id, ...rest } = props;
    return (
      <div className="relative mt-4">
        <fieldset
          className={clsx(
            "visible relative inset-0 z-10 rounded-xl border border-solid bg-transparent outline-none outline-1 outline-offset-0 transition-colors",
            {
              "border-red-500": !!error,
              "border-violet-500 hover:border-violet-900 dark:border-violet-900 hover:dark:border-violet-500":
                !error,
            },
          )}
          aria-hidden
        >
          <textarea
            ref={ref}
            id={id}
            className="peer w-full resize-none rounded-xl border-0 bg-transparent p-3 text-neutral-900 placeholder-transparent outline-none outline-0 outline-offset-0 dark:text-white"
            placeholder={label}
            {...rest}
          />
          <legend className="invisible ml-2 block h-0 px-1 text-xs opacity-50 transition-all peer-placeholder-shown:hidden peer-focus:block dark:text-white">
            <span>{label}</span>
          </legend>
          <label
            htmlFor={id}
            className={clsx(
              `left-0.25 pointer-events-none absolute left-0 -top-2 mx-2 px-1 text-xs transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs`,
              {
                "text-red-500": !!error,
                "text-violet-900 dark:text-violet-500": !error,
              },
            )}
          >
            {label}
          </label>
        </fieldset>
        <p className="mt-1 whitespace-pre text-xs text-red-500">
          {error ?? ` `}
        </p>
      </div>
    );
  },
);

export default TextArea;
