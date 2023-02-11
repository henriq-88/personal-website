type OverlayProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Overlay: React.FC<OverlayProps> = (props) => {
  return (
    <div
      className="fixed inset-0 z-10 bg-black/50 backdrop-blur-sm"
      {...props}
    />
  );
};

export default Overlay;
