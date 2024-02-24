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
            console.log(jsonData);
        };

        fetchData();
    }, []);

    const display_exp = () => {
        if (data === null) return (<div>...Loading</div>);
        return (
            <div>
                {data && 
                data.map((job, index) => {
                    return (
                    <div key = {index}>
                        <div>{job.Company}</div>
                        <div>{job.Position}</div>
                        <div>{job.Date}</div>
                        <div>{job.Description}</div>
                        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start text-gray-50">
                            {
                                job.Skills.map((item, index) => {
                                    return (
                                         <p key = {index}
                                            className="bg-sky-900 px-4 py-0 mr-2 mt-2 text-gray-500 rounded-full text-teal-300"
                                        >
                                            {item}
                                        </p>                                       
                                    )
                                })
                            }
                        </div>
                    </div>
                    )})
                }
            </div>
        );
    };

    return (
        <section id="experience">
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start text-gray-50">
                {display_exp()}
            </div>

        </section>
    )
}

export default Experience;