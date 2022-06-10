import { useRef, useState } from 'react';
// material
import {
  Box,
  List,
  Badge,
  Button,
  Avatar,
  Divider,
  IconButton,
  Typography,
  ListItemText,
  ListItemAvatar,
  ListItemButton
} from '@mui/material';
// utils
import { mockImgAvatar } from '../../utils/mockImages';
// components
import MenuPopover from '../../components/MenuPopover';
import { IconBell } from '../../components/Icons';

const NOTIFICATIONS = [
  {
    id: 1,
    title: 'Bavid Kames',
    description: 'Assigned you on the call with Sara',
    avatar: mockImgAvatar(2),
    createdAt: '2 min ago',
    isUnRead: true
  },
  {
    id: 2,
    title: 'Alexa Marry',
    description: 'Marked the Task New UI as done',
    avatar: mockImgAvatar(6),
    createdAt: '10 min ago',
    isUnRead: true
  },
  {
    id: 3,
    title: 'Eva Maria',
    description: 'Added a new Comment on Sales task',
    avatar: mockImgAvatar(5),
    createdAt: '20 min ago',
    isUnRead: true
  }
];

function renderContent(notification) {
  const title = (
    <>
      <Typography variant="subtitle2">
        {notification.title}
      </Typography>
      <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
        {notification.description}
      </Typography>
    </>
  );

  return {
    avatar: <img alt={notification.title} src={notification.avatar} />,
    title
  };
}

function NotificationItem({ notification }) {
  const { avatar, title } = renderContent(notification);

  return (
    <ListItemButton
      disableGutters
      sx={{
        py: 1.5,
        px: 2.5,
        mt: '1px',
      }}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: 'background.neutral' }}>{avatar}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              display: 'flex',
              alignItems: 'center',
              color: 'text.disabled'
            }}
          >
            {notification.createdAt}
          </Typography>
        }
      />
    </ListItemButton>
  );
}

export default function NotificationsPopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const totalUnRead = NOTIFICATIONS.filter((item) => item.isUnRead === true).length;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        size="large"
        color={open ? 'primary' : 'default'}
        onClick={handleOpen}
        >
        <Badge badgeContent={totalUnRead} color="success">
          <IconBell />
        </Badge>
      </IconButton>
      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 360 }}
      >
        <List disablePadding>
          {NOTIFICATIONS.map((notification) => (
            <NotificationItem key={notification.id} notification={notification} />
          ))}
        </List>

        <Divider />

        <Box sx={{ p: 1 }}>
          <Button fullWidth sx={{ color: '#3B86FF' }}> Show More </Button>
        </Box>
      </MenuPopover>
    </>
  );
}
