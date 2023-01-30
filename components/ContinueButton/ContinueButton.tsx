import { ArrowDownward } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";

interface ContinueButtonProps {
  targetId: string;
  label?: string;
}

const ContinueButton: React.VFC<ContinueButtonProps> = (props) => {
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
        <ArrowDownward />
      </Stack>
    </Button>
  );
};

export default ContinueButton;
