import clsx from "clsx";
import GitHubIcon from "../../Icons/GitHub/GitHub";
import LinkedInIcon from "../../Icons/LinkedIn/LinkedIn";
import StackOverflowIcon from "../../Icons/StackOverflow/StackOverflow";

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

const Footer: React.FC<FooterProps> = (props) => {
  const { className, ...rest } = props;
  const socialLinks = [
    {
      href: `https://github.com/henriq-88`,
      label: `github profile`,
      icon: <GitHubIcon className="h-6 w-6 text-current" />,
    },
    {
      href: `https://www.linkedin.com/in/henrikwassdahl`,
      label: `linkedin profile`,
      icon: <LinkedInIcon className="h-6 w-6 text-current" />,
    },
    {
      href: `https://stackoverflow.com/users/2375978/henrik-wassdahl`,
      label: `stackoverflow profile`,
      icon: <StackOverflowIcon className="h-6 w-6 text-current" />,
    },
  ];

  return (
    <footer
      className={clsx(
        "z-10 flex w-full flex-shrink-0 justify-center gap-4 p-8",
        className,
      )}
      {...rest}
    >
      {socialLinks.map((socialLink) => (
        <a
          key={socialLink.href}
          className="rounded-full p-2 text-violet-900 transition-all ease-in-out hover:scale-110 hover:bg-violet-900/10 dark:text-violet-500 hover:dark:bg-violet-500/10"
          type="anchor"
          href={socialLink.href}
          target="_blank"
          aria-label={socialLink.label}
        >
          {socialLink.icon}
        </a>
      ))}
    </footer>
  );
};

export default Footer;
