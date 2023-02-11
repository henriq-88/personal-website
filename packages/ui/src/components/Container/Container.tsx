import clsx from "clsx";

interface ContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <div className={clsx("mx-auto max-w-screen-lg p-3", className)} {...rest}>
      {children}
    </div>
  );
};

export default Container;
