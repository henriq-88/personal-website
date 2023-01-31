import { Direction, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { directionState } from "@/state/states";
import { useAtom } from "jotai";
import FormatTextDirectionLToRIcon from "../Icons/FormatTextDirectionLToR/FormatTextDirectionLToR";
import FormatTextDirectionRToLIcon from "../Icons/FormatTextDirectionRToL/FormatTextDirectionRToL";

interface DirectionToggleProps {
}

const DirectionToggle: React.FC<DirectionToggleProps> = (props) => {
  const [direction, setDirection] = useAtom(directionState);

  const handleDirectionChange = (newDirection: Direction) => {
    setDirection(newDirection);
  }

  return (
    <>
      <Typography
        variant="caption"
        sx={{
          textTransform: 'uppercase',
        }}
      >
        Direction
      </Typography>
      <ToggleButtonGroup
        value={direction}
        exclusive
        color="secondary"
        onChange={(event, newDirection: Direction) => handleDirectionChange(newDirection)}
        aria-label="direction"
      >
        <ToggleButton
          value="ltr"
          aria-label="left to right"
          sx={{
            flex: 1,
          }}
        >
          <FormatTextDirectionLToRIcon className="h-6 w-6 text-current mr-1" />
          <span>Left to right</span>
        </ToggleButton>
        <ToggleButton
          value="rtl"
          aria-label="right to left"
          sx={{
            flex: 1,
          }}
          >
            <FormatTextDirectionRToLIcon className="h-6 w-6 text-current mr-1" />
          <span>Right to left</span>
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

export default DirectionToggle;
