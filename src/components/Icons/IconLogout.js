
import { styled } from '@mui/material/styles';

export default function IconLogout() {
  const IconMenu = styled('div')(({ theme }) => ({
    backgroundImage:`url('/static/mock-images/covers/icons.png')`,
    backgroundRepeat: "no-repeat",
    height:30,
    width:30,
    backgroundPosition: '-82px -34px',
  }));;
  return (
    <IconMenu />
  );
}
