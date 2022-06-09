
import { styled } from '@mui/material/styles';

export default function IconTwitter() {
  const IconMenu = styled('div')(({ theme }) => ({
    backgroundImage:`url('/static/mock-images/covers/icons.png')`,
    backgroundRepeat: "no-repeat",
    height: 25,
    width: 25,
    backgroundPosition: '-280px 0px',
  }));;
  return (
    <IconMenu />
  );
}
