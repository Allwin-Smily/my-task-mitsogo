
import { styled } from '@mui/material/styles';

export default function IconMenuBar() {
  const IconMenu = styled('div')(({ theme }) => ({
    backgroundImage:`url('/static/mock-images/covers/icons.png')`,
    backgroundRepeat: "no-repeat",
    height:28,
    width:28,
    backgroundPosition: '2px -35px',
  }));;
  return (
    <IconMenu />
  );
}
