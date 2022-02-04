import Box from '@mui/material/Box';
import MaterialCard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';
import Link from 'next/link';
import { BasicData } from '../../types/data';
import { CardStyles } from './card.styles';

const Card: React.FC<BasicData> = (props) => {
  const { id, name, description, price } = props;
  return (
    <CardStyles.Container>
      <MaterialCard sx={{ width: 300 }}>
        <CardContent>
          <Typography variant='h5' component='div'>
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            {price} zł
          </Typography>
          <Typography variant='body2'>{description}</Typography>
        </CardContent>
        <CardActions>
          <Link href={'http://localhost:3000/komputer/' + id}>
            <Button size='small'>Szczegóły</Button>
          </Link>
        </CardActions>
      </MaterialCard>
    </CardStyles.Container>
  );
};

export default Card;
