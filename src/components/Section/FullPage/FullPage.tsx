import { BoxProps, Stack } from "@mui/material";
import React from "react";

type FullPageSectionProps = BoxProps

const FullPageSection: React.FC<FullPageSectionProps> = React.forwardRef((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Stack
      ref={ref}
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
      width="100%"
      height="100vh"
      {...rest}
    >
      {children}
    </Stack>
  );
});

export default FullPageSection;
