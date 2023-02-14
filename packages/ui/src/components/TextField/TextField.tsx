import clsx from "clsx";
import { forwardRef } from "react";

interface TextFieldProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  error?: string;
  hideErrors?: boolean;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    label,
    error,
    id,
    hideErrors,
    className,
    placeholder,
    value,
    ...rest
  } = props;

  return (
    <div className="relative">
      <fieldset
        className={clsx(
          "visible relative inset-0 rounded-xl border border-solid bg-transparent outline-none outline-1 outline-offset-0 transition-colors",
          className,
          {
            "border-red-700 dark:border-red-500": !!error,
            "border-violet-500 hover:border-violet-900 dark:border-violet-900 hover:dark:border-violet-500":
              !error,
          },
        )}
      >
        <input
          ref={ref}
          id={id}
          value={value}
          {...rest}
          className={clsx(
            "peer w-full rounded-xl border-0 bg-transparent p-3 text-neutral-900 outline-none outline-0 outline-offset-0 placeholder-shown:text-ellipsis dark:text-white",
            {
              "placeholder-transparent": !placeholder,
              "placeholder-neutral-500": placeholder,
            },
          )}
          placeholder={placeholder ?? label}
        />
        <legend
          className={clsx(
            "invisible ml-2 block h-0 px-1 text-xs opacity-50 transition-all peer-focus:block dark:text-white",
            {
              "peer-placeholder-shown:hidden": !placeholder,
            },
          )}
        >
          <span>{label}</span>
        </legend>
        <label
          htmlFor={id}
          className={clsx(
            `left-0.25 pointer-events-none absolute left-0 mx-2 px-1 text-xs transition-all  peer-focus:-top-2 peer-focus:text-xs`,
            {
              "text-red-700 dark:text-red-500": !!error,
              "text-violet-900 dark:text-violet-500": !error,
              "-top-2 peer-focus:block": placeholder,
              "-top-2 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:block":
                !placeholder,
            },
          )}
        >
          {label}
        </label>
      </fieldset>
      {hideErrors !== true && (
        <p
          className={clsx(
            "mt-1 whitespace-pre text-xs text-red-700 dark:text-red-500",
            {
              "select-none": !error,
            },
          )}
        >
          {error ?? ` `}
        </p>
      )}
    </div>
  );
});

export default TextField;
