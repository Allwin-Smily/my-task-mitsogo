
import { styled } from '@mui/material/styles';

export default function IconMail() {
  const IconMenu = styled('div')(({ theme }) => ({
    backgroundImage:`url('/static/mock-images/covers/icons.png')`,
    backgroundRepeat: "no-repeat",
    height:30,
    width:30,
    backgroundPosition: '-110px 2px',
  }));;
  return (
    <IconMenu />
  );
}
