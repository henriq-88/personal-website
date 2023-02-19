import clsx from "clsx";

type CardSkeletonProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const CardSkeleton: React.FC<CardSkeletonProps> = (props) => {
  const { className, ...rest } = props;
  return (
    <div
      {...rest}
      className={clsx(
        "animate-pulse bg-neutral-500/50 dark:bg-neutral-500/50",
        className,
      )}
    />
  );
};

export default CardSkeleton;
