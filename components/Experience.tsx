import React, { useEffect, useState } from "react"

type JobData = {
    Date: string,
    Position: string,
    Description: string,
    Skills: Array<string>,
  }

const Experience = () => {
    const [data, setData] = useState<JobData | null>(null);
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
                {data && data.Date}
            </div>
        );
    };

    return (
        <section id="about">
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start text-gray-50">
                {display_exp()
                /*data.map((item, idx) => {
                    return (
                        <p
                            key={idx}
                            className="bg-sky-900 px-4 py-0 mr-2 mt-2 text-gray-500 rounded-full text-teal-300"
                        >
                            {item.skill}
                        </p>
                    )
                })*/}
            </div>

        </section>
    )
}

export default Experience;