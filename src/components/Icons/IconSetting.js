
import { styled } from '@mui/material/styles';

export default function IconSetting() {
  const IconMenu = styled('div')(({ theme }) => ({
    backgroundImage:`url('/static/mock-images/covers/icons.png')`,
    backgroundRepeat: "no-repeat",
    height:30,
    width:30,
    backgroundPosition: '-222px 2px',
  }));;
  return (
    <IconMenu />
  );
}
