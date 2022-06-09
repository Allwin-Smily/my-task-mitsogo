
import { styled } from '@mui/material/styles';

export default function IconSearch() {
  const IconMenu = styled('div')(({ theme }) => ({
    backgroundImage: `url('/static/mock-images/covers/icons.png')`,
    backgroundRepeat: "no-repeat",
    height: 20,
    width: 20,
    backgroundPosition: '-169px -39px',
  }));;
  return (
    <IconMenu />
  );
}
