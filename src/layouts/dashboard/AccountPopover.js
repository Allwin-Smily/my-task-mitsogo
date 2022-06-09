import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha, styled } from '@mui/material/styles';
import { MenuItem, Avatar, IconButton, Typography, Hidden } from '@mui/material';
// components
import MenuPopover from '../../components/MenuPopover';
import { IconUpArrow, IconUser, IconBilling, IconLogout } from '../../components/Icons'
//
import account from '../../_mocks_/account';

const MENU_OPTIONS = [
  {
    label: 'My Profile',
    linkTo: '/',
    icon: <IconUser />,
  },
  {
    label: 'Billing',
    linkTo: '#',
    icon: <IconBilling />,
  },
  {
    label: 'Logout',
    linkTo: '#',
    icon: <IconLogout />,
  }
];

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function AccountPopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div ref={anchorRef} onClick={handleOpen}>
      <Hidden mdDown>
        <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
          {account.displayName}
        </Typography>
        <ExpandMore
          expand={open}
          aria-expanded={open}
          aria-label="show more"
        >
          <IconUpArrow />
        </ExpandMore>
      </Hidden>
      <IconButton
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
            }
          })
        }}
      >
        <Avatar src={account.photoURL} alt="photoURL" />
      </IconButton>
      </div>
      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        {MENU_OPTIONS.map((option) => (
          <MenuItem
            key={option.label}
            to={option.linkTo}
            component={RouterLink}
            onClick={handleClose}
            sx={{ typography: 'body2', py: 1, px: 2.5 }}
          >
            {option.icon}
            {option.label}
          </MenuItem>
        ))}
      </MenuPopover>
    </>
  );
}
