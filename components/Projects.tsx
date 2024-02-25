import React, { useEffect, useState } from "react"

interface ProjectData {
  Title: string,
  Date: string,
  Link: string,
  Description: string,
  Skills: Array<string>,
}

const Projects = () => {
    const [data, setData] = useState<ProjectData[]>([]);
    // const [isLoading, setLoading] = useState(null);
    // const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/projectapi');
            const jsonData = await response.json();
            setData(jsonData);
            console.log(jsonData);
        };

        fetchData();
    }, []);

    const display = () => {
        if (data === null) return (<div>...Loading</div>);
        return (
            <div className="">
                {
                // Iterate over all JSONobjects and jobs
                data && 
                data.map((job, index) => {
                    return (
                    <div key = {index}>
                            <div className="flex grid md:grid-cols-6 text-slate-400 rounded-lg hover:bg-blue-900 md:mr-40 my-3 md:pb-2">
                                <div className="text-center col-span-2">{job.Date}</div>
                                <div className="col-span-4">
                                    <div className="text-gray-50">{job.Title}</div>
                                    <div>{job.Description}</div>
                                    <div className="flex flex-wrap flex-row md:justify-start">
                                        {
                                            // Iterate over all skills in the job
                                            job.Skills.map((item, index) => {
                                                return (
                                                    <p key={index}
                                                        className="bg-sky-900 px-4 py-0 mr-2 mt-2 text-gray-500 rounded-full text-teal-300"
                                                    >
                                                        {item}
                                                    </p>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                    </div>
                    )})
                }
            </div>
        );
       return (<div>My Projects Here</div>);
    };

    return (
        <section id="projects" className="md:pb-12">
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start text-gray-50">
                {display()}
            </div>

        </section>
    )
}

export default Projects;