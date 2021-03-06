import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

import { Computer } from '../../../src/types/data';
import { ApiResponse } from '../../../src/types/apiResponse';

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Computer | ApiResponse>
) => {
  if (req.method === 'GET') {
    const file = fs.readFileSync('./data/computers.json');
    const computers: Computer[] = JSON.parse(file.toString());
    const id = Number(req.query.id);

    if (!isNaN(id) && id >= 0 && id < computers.length)
      res.status(200).json(computers[id]);
    else res.status(400).json({ message: 'Error' });
  }
};

export default handler;
