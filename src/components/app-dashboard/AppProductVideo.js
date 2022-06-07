import * as React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  IconButton
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { mockImgProduct } from '../../utils/mockImages';

export default function AppProductVideo() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Product Video"
      />
      <CardContent>
        <CardMedia
          component="img"
          height="194"
          image={mockImgProduct(1)}
          alt="Product 1"
        />
      </CardContent>
    </Card>
  );
}
