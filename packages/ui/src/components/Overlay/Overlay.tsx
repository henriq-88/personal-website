import clsx from "clsx";

interface OverlayProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isVisible: boolean;
}

const Overlay: React.FC<OverlayProps> = (props) => {
  const { className, isVisible, ...rest } = props;
  return (
    <div
      className={clsx(
        "fixed inset-0 z-10 transition-all duration-300",
        className,
        {
          "bg-black/10 backdrop-blur-sm dark:bg-black/50": isVisible,
          "pointer-events-none bg-black/0 backdrop-blur-0": !isVisible,
        },
      )}
      {...rest}
    />
  );
};

export default Overlay;
