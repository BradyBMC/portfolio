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
      Description: 'I am a CUDA developer who implements digital signal processing algorithms for the Navy\'s radar system, focused on developing clean code optimized for performance. During the development of CUDA programs, I meticulously write unit tests to verify the accuracy and speed of CUDA kernels, alongside comprehensive end-to-end tests to validate the inter process communication between modules.',
      Skills: ['C', 'C++', 'CUDA', 'Python', 'Git', 'Digital Signal Processing'],
    },
    {
      Company: 'Osaka University',
      Date: 'March - August 2023',
      Position: 'Artificial Intelligence Research Intern',
      Description: 'Leveraged the NSD dataset and RISE method to invistigate stable diffusion and fMRI image reconstruction. I redesigned linear model to map fMRIs to latent representation and delivered final presentation showcasing the methodologies and findings.',
      Skills: ['Python', 'Pytorch', 'Pandas'],
    },
    {
      Company: 'University of California Santa Cruz',
      Date: 'June - September 2022',
      Position: 'Undergraduate Research Assistant',
      Description: 'Employed a neural network to capture sequential playing patterns to learn the optimal strategies in Super Smash Bros Melee. Developed a pipeline for seamless game preprocessing and integration to model training process.',
      Skills: ['Python', 'Tensorflow'],
    }
  ]

    res.status(200).json(data);
}