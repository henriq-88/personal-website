import { cva, VariantProps } from "class-variance-authority";

const iconButtonClasses = cva(
  'p-2 bg-transparent transition-colors', {
    variants: {
      rounding: {
        circular: 'rounded-full',
        rounded: 'rounded-xl',
      },
      border: {
        none: 'border-none',
        solid: 'border border-solid border-[#ffffff1f]',
      },
      color: {
        current: 'hover:bg-current',
        light: 'hover:bg-[#ffffff14]',
      },
    }
  }
)

type AnchorButtonProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & { type: `anchor` }

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { type: `button`}

type IconButtonProps = (AnchorButtonProps | ButtonProps) & VariantProps<typeof iconButtonClasses>


const IconButton: React.FC<IconButtonProps> = (props) => {
  const classes = "rounded-xl border border-solid border-[#ffffff1f] p-2 bg-transparent hover:bg-[#ffffff14] transition-colors"
  
  if (props.type === `anchor`) {
    return (
      <a
        className={classes}
        role="button"
        {...props}
      >
        {props.children}
      </a>
    )
  }

  return (
    <>
      <button
        className={classes}
        {...props}
      >
        {props.children}
      </button>
    </>
  );
};

export default IconButton;
