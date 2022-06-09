
import { styled } from '@mui/material/styles';

export default function IconMore() {
  const IconMenu = styled('div')(({ theme }) => ({
    backgroundImage:`url('/static/mock-images/covers/icons.png')`,
    backgroundRepeat: "no-repeat",
    height: 27,
    width: 25,
    backgroundPosition: '-139px -34px',
  }));;
  return (
    <IconMenu />
  );
}
