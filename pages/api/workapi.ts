import type { NextApiRequest, NextApiResponse } from 'next'

type JobData = {
  Date: string,
  Position: string,
  Description: string,
  Skills: Array<string>,
}
/*
  Date,
  Position
  Description
  Skills
*/

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<JobData>
) {

    const data = {
      Date: 'October 2023 - Present',
      Position: 'Software Engineer',
      Description: 'Omegalol what did i do here',
      Skills: ['C++', 'FFT'],
    }

    res.status(200).json(data);
}