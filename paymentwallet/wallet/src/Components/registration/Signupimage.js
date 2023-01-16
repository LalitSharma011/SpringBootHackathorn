import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Registration.css'

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 700 }} className="paper">
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image="/assets/diamond.jpg"
          alt="green iguana"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
            Natwest
          </Typography>
          <Typography className="paper" variant="body2" color="text.secondary" textAlign={'center'}>
          Our purpose is to champion the potential of people, families, and businesses.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}