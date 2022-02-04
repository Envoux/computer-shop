import type { NextApiRequest, NextApiResponse } from 'next';
import { BasicData, Data } from '../../src/types/data';
import fs from 'fs';
import { ApiResponse } from '../../src/types/apiResponse';

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Data[] | ApiResponse>
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
    return;
  }
  if (req.method === 'POST') {
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
