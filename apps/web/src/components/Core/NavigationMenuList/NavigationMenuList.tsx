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
}

const NavigationMenu: React.FC<NavigationMenuListProps> = (props) => {
  const { orientation = `vertical`, onLinkClick, className, ...rest } = props;
  const currentPage = useRouter().pathname;

  const links: Link[] = [
    {
      href: `/`,
      label: `Home`,
    },
    {
      href: `/about`,
      label: `About`,
    },
    {
      href: `/projects`,
      label: `Projects`,
    },
    {
      href: `/contact`,
      label: `Contact`,
    },
  ];

  return (
    <div
      className={clsx(
        "flex w-full items-center justify-center gap-1",
        className,
        {
          "flex-col": orientation === `vertical`,
        },
      )}
      {...rest}
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={clsx(
            "group px-2 py-1 text-center transition-transform hover:scale-105",
            {
              "w-full": orientation === `vertical`,
            },
          )}
          aria-current={currentPage === link.href ? true : undefined}
          onClick={() => onLinkClick?.()}
        >
          <span
            className="rounded-md px-2 py-1 text-lg font-semibold text-violet-500 transition-colors group-hover:text-violet-900 aria-[current]:bg-violet-900/20 aria-[current]:text-violet-900 dark:text-violet-900 dark:group-hover:text-violet-500 aria-[current]:dark:bg-violet-900/25 aria-[current]:dark:text-violet-500"
            aria-current={currentPage === link.href ? true : undefined}
          >
            {link.label}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default NavigationMenu;
