import { ArrowDownIcon } from "@heroicons/react/24/solid"
import { Button, Stack } from "@mui/material";

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
    <Button
      color="inherit"
      onClick={executeScroll}
    >
      <Stack alignItems="center">
        <span>{props.label ?? `Continue`}</span>
        <ArrowDownIcon className="h-6 w-6 text-current" />
      </Stack>
    </Button>
  );
};

export default ContinueButton;
