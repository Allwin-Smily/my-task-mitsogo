import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// material
import {
  Box,
  Stack,
  IconButton,
  Toolbar,
  Hidden,
  Drawer,
  CssBaseline,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  useMediaQuery
} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
//layouts
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import NotificationsPopover from './NotificationsPopover';
import DashboardApp from '../../pages/DashboardApp';
import { IconMenuBar, IconHome, IconDashboard, IconDashboardActive, IconMail, IconProduct, IconSetting } from '../../components/Icons'

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

const AppBar = styled(MuiAppBar)(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: '#fff',
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: '#43425D',
    paddingRight: '0px !important',
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'start',
}));

const Main = styled('main')(({ theme, open }) => ({
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
  ...(open && {
    borderTopLeftRadius: 20,
  }),
  backgroundColor: '#fff',
  minHeight: 64,
  [theme.breakpoints.up('lg')]: {
    minHeight: 70,
    padding: theme.spacing(0, 5),
  }
}));

const MENU_NAV_BAR = [
  {
    id: 1,
    label: 'Home',
    status: 'noactive',
    icon: <IconHome />,
    iconActive: <IconHome />,
  },
  {
    id: 2,
    label: 'Dashboard',
    status: 'active',
    icon: <IconDashboard />,
    iconActive: <IconDashboardActive />,
  },
  {
    id: 3,
    label: 'Inbox',
    status: 'noactive',
    icon: <IconMail />,
    iconActive: <IconHome />,
  },
  {
    id: 4,
    label: 'Products',
    status: 'noactive',
    icon: <IconProduct />,
    iconActive: <IconHome />,
  },
  {
    id: 5,
    label: 'Admin',
    status: 'noactive',
    icon: <IconSetting />,
    iconActive: <IconHome />,
  },
]

export default function DashboardLayout() {

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    (!open)? setOpen(true) : setOpen(false)
  }

  useEffect(() => {
    (!isDesktop)? setOpen(false): setOpen(true)
  },[isDesktop]);

  const renderAppBar = (
    <>
      <IconButton edge="start" color="inherit" onClick={handleDrawerOpen} aria-label="menu">
        <IconMenuBar />
      </IconButton>
      <Hidden mdDown>
        <Searchbar />
      </Hidden>
      <Box sx={{ flexGrow: 1 }} />
      <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
      <Hidden mdUp>
        <Searchbar />
      </Hidden>
        <NotificationsPopover />
        <AccountPopover />
      </Stack>
    </>
  );

  const renderDrawerContent = (
    <>
      <DrawerHeader sx={{ backgroundColor: '#3C3B54' }}>
        <Typography variant='h6' sx={{ color: '#fff', textAlign: 'center' }} >
          A&nbsp;C&nbsp;M&nbsp;E
        </Typography>
      </DrawerHeader>
      <Divider />
      <List className='Menu-bar'>
        {MENU_NAV_BAR.map((menu, index) => (
          <ListItem className={menu.status === "active" ? ( 'side-menu active' ) : ( 'side-menu' )} key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              {menu.status === "active" ? ( menu.iconActive ) : ( menu.icon )}
              </ListItemIcon>
              <ListItemText primary={menu.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );

  return (
    <RootStyle>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <ToolbarStyle open={open}>
            {renderAppBar}
          </ToolbarStyle>
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
          {renderDrawerContent}
        </Drawer>
        <Main open={open} sx={{ backgroundColor: '#F5F7FB' }}>
          <DashboardApp />
        </Main>
      </Box>
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}
