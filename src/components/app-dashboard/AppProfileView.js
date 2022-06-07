import * as React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { mockImgAvatar } from '../../utils/mockImages';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { 
  List,
  ListItem,
  Avatar, 
  Typography,
  ListItemAvatar,
  ListItemText,
  Card,
  CardHeader,
  CardContent,
  IconButton
} from '@mui/material';

const NOTIFICATIONS = [
  {
    id: 1,
    name: 'Drew James',
    country: 'United States',
    avatar: mockImgAvatar(3),
    phone: '8715674877'
  },
  {
    id: 2,
    name: 'Bavid Kames',
    country: 'United States',
    avatar: mockImgAvatar(2),
    phone: '8715674877'
  },
  {
    id: 3,
    name: 'Lavid Emes',
    country: 'United States',
    avatar: mockImgAvatar(4),
    phone: '8715674877'
  }
];

export default function AppProfileView() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent sx={{ textAlign: 'center' }}>
        <Avatar sx={{ bgcolor: 'background.neutral', width: '60px', height: '60px', marginLeft: '41%' }}><img alt="profile" src={mockImgAvatar(1)} /></Avatar>
        <Typography variant="subtitle2">Nick Herasimenka</Typography>
        <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>United States</Typography>
        <div>
          <InboxIcon sx={{ color: 'text.secondary' }} />
          <InboxIcon sx={{ color: 'text.secondary' }} />
          <InboxIcon sx={{ color: 'text.secondary' }} />
          <InboxIcon sx={{ color: 'text.secondary' }} />
        </div>
      </CardContent>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Our Users"
      />
      <List disablePadding>
        {NOTIFICATIONS.map((notification) => (
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'background.neutral' }}><img alt={notification.title} src={notification.avatar} /></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <>
                <Typography variant="subtitle2">
                  {notification.name}
                </Typography>
                <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
                  {notification.country}
                </Typography>
                </>
              }
            />
            <Typography
                  variant="caption"
                  sx={{
                    mt: '25px',
                    display: 'flex',
                    alignItems: 'center',
                    color: 'text.disabled',
                  }}
                >
                  Mobile: {notification.phone}
                </Typography>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
