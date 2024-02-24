import type { NextApiRequest, NextApiResponse } from 'next'

interface JobData {
  Company: string,
  Date: string,
  Position: string,
  Description: string,
  Skills: Array<string>,
}
/*
  Company,

  Date,
  Position
  Description
  Skills
*/

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<JobData[]>
) {

    const data : JobData[] = [
    {
      Company: 'Nawcwd',
      Date: 'October 2023 - Present',
      Position: 'Software Engineer',
      Description: 'Omegalol what did i do here',
      Skills: ['C++', 'FFT'],
    },
    {
      Company: 'Researcher',
      Date: 'Job 2',
      Position: 'Software Engineer',
      Description: 'Job 2',
      Skills: ['x++', 'x'],
    },
    {
      Company: 'Researcher',
      Date: 'Job 2',
      Position: 'Software Engineer',
      Description: 'Job 2',
      Skills: ['x++', 'x'],
    }
  ]

    res.status(200).json(data);
}