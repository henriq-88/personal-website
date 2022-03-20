/* eslint-disable react/display-name */
import { Box, BoxProps, Stack } from "@mui/material";
import React from "react";

interface FullPageSectionProps extends BoxProps {
}

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
    >
      {children}
    </Stack>
  );
});

export default FullPageSection;
