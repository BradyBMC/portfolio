import React, { useEffect, useState } from "react"

type JobData = {
    Company: string,
    Date: string,
    Position: string,
    Description: string,
    Skills: Array<string>,
}

const Experience = () => {
    // const [data, setData] = useState<JobData | null>(null);
    const [data, setData] = useState<JobData[]>([]);
    // const [isLoading, setLoading] = useState(null);
    // const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/workapi');
            const jsonData = await response.json();
            setData(jsonData);
        };

        fetchData();
    }, []);

    const display_exp = () => {
        if (data === null) return (<div>...Loading</div>);
        return (
            <div className="">
                {
                // Iterate over all JSONobjects and jobs
                data && 
                data.map((job, index) => {
                    return (
                    <div key = {index}>
                            <div className="group flex grid md:grid-cols-6 text-slate-400 rounded-lg hover:bg-blue-900 md:mr-40 my-3 md:pb-2">
                                <div className="text-center col-span-2">{job.Date}</div>
                                <div className="col-span-4">
                                    <div className="text-gray-50 group-hover:text-teal-300">{job.Position}</div>
                                    <div>{job.Company}</div>
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
    };

    return (
        <section id="experience" className="md:pb-12">
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start text-gray-50">
                {display_exp()}
            </div>

        </section>
    )
}

export default Experience;