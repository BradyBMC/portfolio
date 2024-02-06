import React from "react"

const skills = [
    { skill: "Python" },
    { skill: "C" },
    { skill: "C++" },
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "React" },
    { skill: "Next.js" },
    { skill: "Node.js" },
    { skill: "Express.js" },
    { skill: "Tailwind CSS" },
    { skill: "Git" },
    { skill: "GitHub" },
    { skill: "PostgreSQL" },
]

const Languages = () => {
    return (
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left text-gray-50">
            <div className="text-center md:w-1/2 md:text-left text-gray-50">
                <h1 className="text-2xl font-bold mb-6 text-gray-50">My Skills</h1>
                <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start text-gray-50">
                    {skills.map((item, idx) => {
                        return (
                            <p
                                key={idx}
                                className="bg-sky-900 px-4 py-0 mr-2 mt-2 text-gray-500 rounded-full text-teal-300"
                            >
                                {item.skill}
                            </p>
                        )
                    })}
                </div>
            </div>
        </ div>
    );
}

export default Languages;