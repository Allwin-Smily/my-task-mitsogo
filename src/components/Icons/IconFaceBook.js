
import { styled } from '@mui/material/styles';

export default function IconFaceBook() {
  const IconMenu = styled('div')(({ theme }) => ({
    backgroundImage:`url('/static/mock-images/covers/icons.png')`,
    backgroundRepeat: "no-repeat",
    height: 25,
    width: 25,
    backgroundPosition: '-307px 0px',
  }));;
  return (
    <IconMenu />
  );
}
