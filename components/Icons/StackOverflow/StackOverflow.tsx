import { SvgIcon, SvgIconProps } from "@mui/material";

interface StackOverflowIconProps {
}

const StackOverflowIcon: React.VFC<StackOverflowIconProps> = (props) => {
  return (
    <SvgIcon width="24px" height="24px" viewBox="0 0 512 512">
      <path d="M392,440V320h40V480H64V320h40V440Z"/>
      <path d="M149.1,308.77l198.57,40.87,8.4-39.32L157.5,269.45Zm26.27-93.12L359.22,300,376,263.76,192.18,178.92Zm50.95-89,156,127.78,25.74-30.52-156-127.78ZM328,32,294.61,55.8,415.43,216.17,448,192ZM144,400H348V360H144Z"/>
    </SvgIcon>
    // <svg
    //   width="24px"
    //   height="24px"
    //   viewBox="0 0 512 512"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path d="M392,440V320h40V480H64V320h40V440Z"/>
    //   <path d="M149.1,308.77l198.57,40.87,8.4-39.32L157.5,269.45Zm26.27-93.12L359.22,300,376,263.76,192.18,178.92Zm50.95-89,156,127.78,25.74-30.52-156-127.78ZM328,32,294.61,55.8,415.43,216.17,448,192ZM144,400H348V360H144Z"/>
    // </svg>
  );
};

export default StackOverflowIcon;
