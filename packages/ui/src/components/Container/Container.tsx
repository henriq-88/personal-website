interface ContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <div className="max-w-screen-lg p-3" {...rest}>
      {children}
    </div>
  );
};

export default Container;
