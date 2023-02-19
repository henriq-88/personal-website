import clsx from "clsx";

type DividerProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHRElement>,
  HTMLHRElement
>;

const Divider: React.FC<DividerProps> = (props) => {
  const { className, ...rest } = props;
  return (
    <hr
      {...rest}
      className={clsx(className, `border-neutral-100 dark:border-neutral-800`)}
    />
  );
};

export default Divider;
