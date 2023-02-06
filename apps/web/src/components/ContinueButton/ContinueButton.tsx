import { ArrowDownIcon } from "@heroicons/react/24/solid"

interface ContinueButtonProps {
  targetId: string;
  label?: string;
}

const ContinueButton: React.FC<ContinueButtonProps> = (props) => {
  const executeScroll = () => {
    document.getElementById(props.targetId)?.scrollIntoView({
      behavior: `smooth`,
    })
  };

  return (
    <button
      className="animate-bounce flex flex-col items-center rounded-xl bg-transparent hover:bg-[#00000014] hover:dark:bg-[#ffffff14] transition-colors p-2"
      color="inherit"
      onClick={executeScroll}
    >
      <span>{props.label ?? `Continue`}</span>
      <ArrowDownIcon className="h-6 w-6 text-current" />
    </button>
  );
};

export default ContinueButton;
