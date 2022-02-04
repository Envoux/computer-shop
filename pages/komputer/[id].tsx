import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import axios from 'axios';
import React from 'react';
import { Data } from '../../src/types/data';

interface ComputerDetailsProps {
  data: Data;
}

const ComputerDetails: React.FC<ComputerDetailsProps> = (props) => {
  const { id, name, description, price, details } = props.data;
  return (
    <div style={{ width: 800, margin: '50px auto' }}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Nazwa</TableCell>
              <TableCell align='right'>Opis</TableCell>
              <TableCell align='right'>Cena(zł)</TableCell>
              <TableCell align='right'>CPU(GHz)</TableCell>
              <TableCell align='right'>RAM(GB)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {name}
              </TableCell>
              <TableCell align='right'>{description}</TableCell>
              <TableCell align='right'>{price}</TableCell>
              <TableCell align='right'>{details?.cpu}</TableCell>
              <TableCell align='right'>{details?.ram}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '0' } }],
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const response = await axios.get(
    'http://localhost:3000/api/computer/' + params.id,
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );

  const data: Data[] = await response.data;

  return {
    props: { data },
  };
}
export default ComputerDetails;
