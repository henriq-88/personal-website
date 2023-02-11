import Link from "next/link";
import { useRouter } from "next/router";

interface NavigationMenuListProps {
  onLinkClick: () => void;
}

interface Link {
  href: string;
  label: string;
}

const NavigationMenu: React.FC<NavigationMenuListProps> = (props) => {
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
    <div className="flex w-full flex-col items-center gap-1 p-3">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="w-full px-2 py-1 text-center"
          aria-current={currentPage === link.href ? true : undefined}
          onClick={() => props.onLinkClick()}
        >
          <span
            className="pointer-events-none rounded-md px-2 py-1 text-lg font-semibold text-violet-500 transition-colors hover:text-violet-900 aria-[current]:bg-violet-900/20 aria-[current]:text-violet-900 dark:text-violet-900 hover:dark:text-violet-500 aria-[current]:dark:bg-violet-900/25 aria-[current]:dark:text-violet-500"
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
