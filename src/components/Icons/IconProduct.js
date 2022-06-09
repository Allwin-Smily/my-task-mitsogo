
import { styled } from '@mui/material/styles';

export default function IconProduct() {
  const IconMenu = styled('div')(({ theme }) => ({
    backgroundImage:`url('/static/mock-images/covers/icons.png')`,
    backgroundRepeat: "no-repeat",
    height:30,
    width:30,
    backgroundPosition: '-166px 2px',
  }));;
  return (
    <IconMenu />
  );
}
