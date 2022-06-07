import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// material
import { Box, Stack, IconButton, Toolbar } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
//layouts
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import NotificationsPopover from './NotificationsPopover';
import DashboardApp from '../../pages/DashboardApp';

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: 88,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: 116,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const ToolbarStyle = styled(Toolbar)(({ theme, open }) => ({
  backgroundColor: '#fff',
  minHeight: 64,
  [theme.breakpoints.up('lg')]: {
    minHeight: 70,
    padding: theme.spacing(0, 5),
    borderTopLeftRadius: 20,
  }
}));


export default function DashboardLayout() {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    (!open)? setOpen(true) : setOpen(false)
  }

  return (
    <RootStyle>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ backgroundColor: '#43425D' }} open={open}>
          <ToolbarStyle open={open}>
            <IconButton edge="start" color="inherit" onClick={handleDrawerOpen} aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon sx={{color: 'black' }} />
            </IconButton>
            <Searchbar />
            <Box sx={{ flexGrow: 1 }} />
            <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
              <NotificationsPopover />
              <AccountPopover />
            </Stack>
          </ToolbarStyle>
          {/* <DashboardNavbar handleDrawerOpen={() => (!open)? setOpen(true) : setOpen(false)} /> */}
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: '#43425D',
              color: '#fff'
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader sx={{justifyContent: 'start'}}>
            <Typography variant='h6' sx={{ color: '#fff', textAlign: 'center' }} >
              A&nbsp;C&nbsp;M&nbsp;E
            </Typography>
          </DrawerHeader>
          <Divider />
          <List>
            {['Home', 'Dashboard', 'Inbox', 'Products', 'Admin'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Main open={open} sx={{ backgroundColor: '#F5F7FB' }}>
          <DrawerHeader />
          <DashboardApp />
        </Main>
      </Box>
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}
