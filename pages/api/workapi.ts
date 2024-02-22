import type { NextApiRequest, NextApiResponse } from 'next'

type JobData = {
  Date: string,
  Position: string,
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
    }

    res.status(200).json(data);
}