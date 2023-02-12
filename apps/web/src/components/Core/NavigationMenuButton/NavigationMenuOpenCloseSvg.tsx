import React from "react";
import { motion, SVGMotionProps, Transition } from "framer-motion";

interface NavigationMenuOpenCloseSvgProps
  extends SVGMotionProps<SVGSVGElement> {
  isOpen?: boolean;
  color?: string;
  strokeWidth?: string | number;
}

const NavigationMenuOpenCloseSvg: React.FC<NavigationMenuOpenCloseSvgProps> = ({
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

  const mx = 4;
  const my = 7;
  const unitHeight = height as number;
  const unitWidth = (unitHeight * (width as number)) / (height as number);
  const transition: Transition = { duration: 0.3, ease: "easeOut" };

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
        x1={mx}
        x2={unitWidth - mx}
        y1={my}
        y2={my}
        variants={top}
        transition={transition}
        {...lineProps}
      />
      <motion.line
        x1={mx}
        x2={unitWidth - 4}
        y1={unitHeight / 2}
        y2={unitHeight / 2}
        variants={center}
        transition={transition}
        {...lineProps}
      />
      <motion.line
        x1={mx}
        x2={unitWidth - 4}
        y1={unitHeight - my}
        y2={unitHeight - my}
        variants={bottom}
        transition={transition}
        {...lineProps}
      />
    </motion.svg>
  );
};

export default NavigationMenuOpenCloseSvg;
