import clsx from "clsx";

type OverlayProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Overlay: React.FC<OverlayProps> = (props) => {
  const { className, ...rest } = props;
  return (
    <div
      className={clsx(
        "fixed inset-0 z-10 bg-black/50 backdrop-blur-sm transition-all",
        className,
      )}
      {...rest}
    />
  );
};

export default Overlay;
