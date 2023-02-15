import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface NavigationMenuListProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  orientation?: `horizontal` | `vertical`;
  onLinkClick?: () => void;
}

interface Link {
  href: string;
  label: string;
  exact: boolean;
  x: number;
  y: number;
  width: number;
}

const NavigationMenu: React.FC<NavigationMenuListProps> = (props) => {
  const { orientation = `vertical`, onLinkClick, className, ...rest } = props;
  const currentPage = useRouter().pathname;

  const links: Link[] = [
    {
      href: `/`,
      label: `Home`,
      exact: true,
      x: -156,
      y: -60,
      width: 70,
    },
    {
      href: `/about`,
      label: `About`,
      exact: true,
      x: -65,
      y: -20,
      width: 72,
    },
    {
      href: `/projects`,
      label: `Projects`,
      exact: false,
      x: 36,
      y: 20,
      width: 89,
    },
    {
      href: `/contact`,
      label: `Contact`,
      exact: true,
      x: 146,
      y: 60,
      width: 91,
    },
  ];

  const isLinkHighlighted = (link: Link) => {
    if (!link.exact) {
      const startsWithLink = currentPage.startsWith(link.href);
      return startsWithLink ? startsWithLink : undefined;
    }
    return currentPage === link.href ? true : undefined;
  };

  const highlightedLinkIndex = links.findIndex((link) =>
    isLinkHighlighted(link),
  );

  return (
    <div
      className={clsx("flex items-center justify-center gap-1", className, {
        "flex-col": orientation === `vertical`,
      })}
      {...rest}
    >
      {links.map((link, i) => (
        <Link
          key={link.href}
          href={link.href}
          className={clsx(
            "group px-2 py-1 text-center transition-transform ease-in-out hover:scale-105",
            {
              "w-full": orientation === `vertical`,
            },
          )}
          aria-current={isLinkHighlighted(link)}
          onClick={(e) => {
            console.log(e.clientX);
            onLinkClick?.();
          }}
        >
          <span
            className="rounded-md px-2 py-1 text-lg font-semibold text-violet-500 transition-colors group-hover:text-violet-900 aria-[current]:text-violet-900 dark:text-violet-700 dark:group-hover:text-violet-500 aria-[current]:dark:text-violet-500"
            aria-current={isLinkHighlighted(link)}
          >
            {link.label}
          </span>
        </Link>
      ))}
      {/* desktop */}
      <motion.div
        className="absolute z-[-1] hidden h-[34px] rounded-md bg-violet-900/20 dark:bg-violet-700/25 sm:block"
        initial={{
          display: `hidden`,
          opacity: 0,
          x: links[highlightedLinkIndex]?.x,
        }}
        animate={{
          display: `hidden`,
          opacity: 1,
          x: links[highlightedLinkIndex]?.x,
          width: links[highlightedLinkIndex]?.width,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 30,
        }}
      />
      {/* mobile */}
      <motion.div
        className="absolute z-[-1] block h-[34px] rounded-md bg-violet-900/20 dark:bg-violet-700/25 sm:!hidden"
        initial={{
          // display: `none`,
          opacity: 0,
          y: links[highlightedLinkIndex]?.y,
        }}
        animate={{
          // display: `none`,
          opacity: 1,
          y: links[highlightedLinkIndex]?.y,
          width: links[highlightedLinkIndex]?.width,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 30,
        }}
      />
    </div>
  );
};

export default NavigationMenu;
