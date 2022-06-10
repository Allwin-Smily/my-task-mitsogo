import * as React from 'react';
import { mockImgAvatar } from '../../utils/mockImages';
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
  IconButton,
  Badge
} from '@mui/material';
import { IconMore, IconTwitter, IconFaceBook, IconLinkedin, IconWhatsapp } from '../Icons';

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
    <Card sx={{ width: '100%' }}>
      <CardContent sx={{ textAlign: 'center' }}>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Avatar sx={{ bgcolor: 'background.neutral', width: '60px', height: '60px' }}><img alt="profile" src={mockImgAvatar(1)} /></Avatar>
        </Badge>
        <Typography variant="subtitle2">Nick Herasimenka</Typography>
        <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>United States</Typography>
        <div style={{ display: 'flex', marginLeft: '70px' }}>
          <IconButton>
            <IconTwitter />
          </IconButton>
          <IconButton>
            <IconFaceBook />
          </IconButton>
          <IconButton>
            <IconLinkedin />
          </IconButton>
          <IconButton>
            <IconWhatsapp />
          </IconButton>
        </div>
      </CardContent>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <IconMore />
          </IconButton>
        }
        title="Our Users"
      />
      <List disablePadding>
        {NOTIFICATIONS.map((notification, index) => (
          <ListItem key={index}>
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
