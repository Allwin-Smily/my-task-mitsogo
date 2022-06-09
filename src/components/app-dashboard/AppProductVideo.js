import * as React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Hidden
} from '@mui/material';
import { IconMore } from '../Icons';

export default function AppProductVideo() {
  const DesktopiFrame = (
    <iframe
      id="Desktopvideo"
      width="310"
      height="185"
      title="Desktopvideo"
      src={"https://www.youtube.com/embed/Oy6hk6Y7VHQ"}
      frameBorder="0"
      allow="picture-in-picture"
      allowFullScreen
    />
  );

  const MobileiFrame = (
    <iframe
      id="Mobilevideo"
      width="280"
      height="190"
      title="Mobilevideo"
      src={"https://www.youtube.com/embed/Oy6hk6Y7VHQ"}
      frameBorder="0"
      allow="picture-in-picture"
      allowFullScreen
    />
  );

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
        <Hidden mdDown>
          {DesktopiFrame}
        </Hidden>
        <Hidden mdUp>
          {MobileiFrame}
        </Hidden>
      </CardContent>
    </Card>
  );
}
