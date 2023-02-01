import React from "react";

type FullPageSectionProps = React.HTMLAttributes<HTMLDivElement>

const FullPageSection: React.FC<FullPageSectionProps> = React.forwardRef<HTMLDivElement, FullPageSectionProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <div
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center relative"
      {...rest}
    >
      {children}
    </div>
  );
});

export default FullPageSection;
