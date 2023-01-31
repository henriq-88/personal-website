import { BoxProps, Stack } from "@mui/material";
import React from "react";

type FullPageSectionProps = BoxProps

const FullPageSection: React.FC<FullPageSectionProps> = React.forwardRef((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Stack
      ref={ref}
      {...rest}
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      py={4}
      position="relative"
    >
      {children}
    </Stack>
  );
});

export default FullPageSection;
