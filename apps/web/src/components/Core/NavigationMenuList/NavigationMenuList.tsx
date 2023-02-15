import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

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
}

const NavigationMenu: React.FC<NavigationMenuListProps> = (props) => {
  const { orientation = `vertical`, onLinkClick, className, ...rest } = props;
  const currentPage = useRouter().pathname;

  const links: Link[] = [
    {
      href: `/`,
      label: `Home`,
      exact: true,
    },
    {
      href: `/about`,
      label: `About`,
      exact: true,
    },
    {
      href: `/projects`,
      label: `Projects`,
      exact: false,
    },
    {
      href: `/contact`,
      label: `Contact`,
      exact: true,
    },
  ];

  const isLinkHighlighted = (link: Link) => {
    if (!link.exact) {
      const startsWithLink = currentPage.startsWith(link.href);
      return startsWithLink ? startsWithLink : undefined;
    }
    return currentPage === link.href ? true : undefined;
  };

  return (
    <div
      className={clsx("flex items-center justify-center gap-1", className, {
        "flex-col": orientation === `vertical`,
      })}
      {...rest}
    >
      {links.map((link) => (
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
          onClick={() => onLinkClick?.()}
        >
          <span
            className="rounded-md px-2 py-1 text-lg font-semibold text-violet-500 transition-colors group-hover:text-violet-900 aria-[current]:bg-violet-900/20 aria-[current]:text-violet-900 dark:text-violet-700 dark:group-hover:text-violet-500 aria-[current]:dark:bg-violet-700/25 aria-[current]:dark:text-violet-500"
            aria-current={isLinkHighlighted(link)}
          >
            {link.label}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default NavigationMenu;
