import clsx from "clsx";

type CardSkeletonProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const CardSkeleton: React.FC<CardSkeletonProps> = (props) => {
  const { className, role = `progressbar`, ...rest } = props;
  return (
    <div
      role={role}
      className={clsx(
        "animate-pulse cursor-progress bg-neutral-500/50 dark:bg-neutral-500/50",
        className,
      )}
      {...rest}
    />
  );
};

export default CardSkeleton;
