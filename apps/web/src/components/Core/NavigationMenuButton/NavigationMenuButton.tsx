import React from "react";
import { motion, SVGMotionProps } from "framer-motion";

interface NavigationMenuButtonProps extends SVGMotionProps<SVGSVGElement> {
  isOpen?: boolean;
  color?: string;
  strokeWidth?: string | number;
}

const NavigationMenuButton: React.FC<NavigationMenuButtonProps> = ({
  isOpen = false,
  width = 24,
  height = 24,
  strokeWidth = 2,
  color = "currentColor",
  ...props
}) => {
  const variant = isOpen ? "opened" : "closed";
  const top = {
    closed: {
      rotate: [45, 0, 0],
      translateY: [5, 5, 0],
    },
    opened: {
      rotate: [0, 0, 45],
      translateY: [0, 5, 5],
    },
  };
  const center = {
    closed: {
      opacity: [0, 0, 1],
    },
    opened: {
      opacity: [1, 0, 0],
    },
  };
  const bottom = {
    closed: {
      rotate: [-45, 0, 0],
      translateY: [-5, -5, 0],
    },
    opened: {
      rotate: [0, 0, -45],
      translateY: [0, -5, -5],
    },
  };
  const lineProps: SVGMotionProps<SVGLineElement> = {
    stroke: color,
    strokeWidth: strokeWidth as number,
    strokeLinecap: "round",
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
  };
  const unitHeight = 24;
  const unitWidth = (unitHeight * (width as number)) / (height as number);

  return (
    <motion.svg
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
      {...props}
    >
      <motion.line
        x1="4"
        x2={unitWidth - 4}
        y1="7"
        y2="7"
        variants={top}
        transition={{ duration: 0.3, ease: "easeOut" }}
        {...lineProps}
      />
      <motion.line
        x1="4"
        x2={unitWidth - 4}
        y1="12"
        y2="12"
        variants={center}
        transition={{ duration: 0.3, ease: "easeOut" }}
        {...lineProps}
      />
      <motion.line
        x1="4"
        x2={unitWidth - 4}
        y1="17"
        y2="17"
        variants={bottom}
        transition={{ duration: 0.3, ease: "easeOut" }}
        {...lineProps}
      />
    </motion.svg>
  );
};

export default NavigationMenuButton;
