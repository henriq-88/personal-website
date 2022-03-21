import { Direction, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { FormatTextdirectionRToL as FormatDirectionRToLIcon, FormatTextdirectionLToR as FormatDirectionLToRIcon } from '@mui/icons-material';
import { directionState } from "@/state/states";
import { useRecoilState } from "recoil";

interface DirectionToggleProps {
}

const DirectionToggle: React.VFC<DirectionToggleProps> = (props) => {
  const [direction, setDirection] = useRecoilState(directionState);

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
          <FormatDirectionLToRIcon
            sx={{
              mr: 1,
            }}
          />
          <span>Left to right</span>
        </ToggleButton>
        <ToggleButton
          value="rtl"
          aria-label="right to left"
          sx={{
            flex: 1,
          }}
          >
            <FormatDirectionRToLIcon
              sx={{
                mr: 1,
              }}
            />
          <span>Right to left</span>
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

export default DirectionToggle;
