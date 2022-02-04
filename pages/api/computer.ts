import type { NextApiRequest, NextApiResponse } from 'next';
import { BasicData, Data } from '../../types/data';
import fs from 'fs';

// const computers: Data[] = [
//   {
//     id: 1,
//     name: 'ASUS',
//     description: 'Laptop do biura',
//     price: 1000,
//     details: {
//       ram: '8 GB',
//     },
//   },
//   {
//     id: 2,
//     name: 'Lenovo',
//     description: 'Laptop do pracy',
//     price: 2000,
//     details: {
//       cpu: '2.8 GHz',
//       ram: '16 GB',
//     },
//   },
//   {
//     id: 3,
//     name: 'Acer',
//     description: 'Laptop do gier',
//     price: 3000,
//     details: {
//       cpu: '3.2 GHz',
//       ram: '16 GB',
//     },
//   },
// ];

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Data[] | { message: string }>
) => {
  const file = fs.readFileSync('./data/computers.json');
  const computers: Data[] = JSON.parse(file.toString());
  if (req.method === 'GET') {
    res.status(200).json(
      computers.map<BasicData>((item) => ({
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
      }))
    );
  } else if (req.method === 'POST') {
    const data: Data = req.body;
    if (data.name && data.description && data.price) {
      data.id = computers.length;
      computers.push(data);
      fs.writeFileSync('./data/computers.json', JSON.stringify(computers));
      res.status(200).json({ message: 'success' });
    }
  }
};

export default handler;
