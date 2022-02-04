import type { NextApiRequest, NextApiResponse } from 'next';
import { Data } from '../../../types/data';
import fs from 'fs';
import { ApiResponse } from '../../../types/apiResponse';

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Data | ApiResponse>
) => {
  if (req.method === 'GET') {
    const file = fs.readFileSync('./data/computers.json');
    const computers: Data[] = JSON.parse(file.toString());
    const id = Number(req.query.id);

    if (!isNaN(id) && id >= 0 && id < computers.length)
      res.status(200).json(computers[id]);
    else res.status(400).json({ message: 'Error' });
  }
};

export default handler;
