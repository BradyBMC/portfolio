import React from "react"
import Image from "next/image"

const Title = () => {
    return (
        <div className="mx-auto mt-32">
            <div className="flex">
                <div>
                    <img className="object-cover bg-yellow-300 rounded-full w-32 h-32" src="Headshot.jpg" alt="image description"></img>
                </div >
                <div className="ml-4">
                    <h1 className="text-6xl font-bold mb-2 md:text-left text-gray-50">
                        Brady Chan
                    </h1>
                    <div className="text-gray-50 mb-2">
                        Software Engineer at Nawcwd
                    </ div>
                    <div className="text-slate-400">
                        I develop backend software, full stack web applications, and <br /> signal processing.
                    </div>
                </ div>
            </ div>
        </ div>
    );
}

export default Title;