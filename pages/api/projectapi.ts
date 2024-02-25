import type { NextApiRequest, NextApiResponse } from 'next'

interface ProjectData {
    Title: string,
    Date: string,
    Link: string,
    Description: string,
    Skills: Array<string>,
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ProjectData[]>
) {

    const data: ProjectData[] = [
        {
            Title: 'Audio Visualizer',
            Date: 'May 2022',
            Link: 'https://github.com/BradyBMC/Audio-Visualizer',
            Description: 'As the project lead, I led a team of 4 developers to create an audio visualizer utilizing the Windows Audio Session API. The final release was the culmination of full-cycle software development, including system design, release plans, implementation, sprint reports, testing, and the final release. To optimize performance, I developed a multithreaded design to efficiently copy and process data from the endpoint buffer while concurrently generating visuals.',
            Skills: ['C++', 'Qt', 'OpenGL', 'Windows Audio Session API', 'Multithreading', 'Jira'],
        },
        {
            Title: 'PintOS',
            Date: 'February 2022',
            Link: 'https://github.com/BradyBMC/PintOS',
            Description: 'I developed a kernel for a low-level operating system tasked with managing threads and the file system. This involved implementing various features such as thread preemption, thread priority, priority donation, and system calls. To ensure robustness and reliability, the kernel utilizes thread-safe operations to prevent race conditions and mitigate potential deadlock scenarios.',
            Skills: ['C', 'Pthreads', 'Multithreading', 'Preemption', 'Mutex', 'Semaphore'],
        },
        {
            Title: 'Email System',
            Date: 'November 2022',
            Link: 'https://github.com/BradyBMC/cse186-asgn8',
            Description: 'I designed a full-stack web application aimed at enabling users to retrieve emails through a user interface implemented with React and Material UI. This involved creating an asynchronous RESTful API, accessible by the frontend through Express.js and PostgreSQL. To ensure functionality and reliability, comprehensive testing was conducted across all components, including backend, frontend, and end-to-end interactions.',
            Skills: ['React.js', 'Node.js', 'Express.js', 'Puppeteer', 'Jest', 'OpenAPI', 'Material UI'],
        }
    ]

    res.status(200).json(data);
}