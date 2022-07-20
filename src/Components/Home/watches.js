import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function WatchCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= '../../images/watch_login2.jpg'
        alt="Rolex"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Rolex
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $100.00
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Quick Add</Button>
      </CardActions>
    </Card>
  );
}
