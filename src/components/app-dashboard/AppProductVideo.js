import * as React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
} from '@mui/material';
import { IconMore } from '../Icons';

export default function AppProductVideo() {

  return (
    <Card sx={{ width: '100%' }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <IconMore />
          </IconButton>
        }
        title="Product Video"
      />
      <CardContent>
        <iframe
          id="Desktopvideo"
          width="100%"
          height="185"
          title="Desktopvideo"
          src={"https://www.youtube.com/embed/Oy6hk6Y7VHQ"}
          frameBorder="0"
          allow="picture-in-picture"
          allowFullScreen
        />
      </CardContent>
    </Card>
  );
}
