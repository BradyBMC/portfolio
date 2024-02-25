import React, { useEffect } from "react"

const Biography = () => {
  return (
    <section id="biography">
      <div className="pb-12 md:pt-16 md:pb-12">
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left text-slate-400">
          <div className="text-wrap md:pr-40">
            <p>
            Greetings! I am Brady Chan, a dedicated software engineer based out of Oxnard, CA. 
            I graduated from University of California Santa Cruz, where I earned my Bachelors of Science degree in Computer Science in June 2023 and have been working in the field ever since.
            </p>
            {/*
            <br />
            <p>
            Throughout my academic tenure, I had the privilege of contributing to a plethora of projects spanning diverse languages and roles.
            Notable among them was my role as a team lead, spearheading the development of an innovative audiovisualizer.
            Leveraging technologies such as C++, Qt, and OpenGL.
            Additionally, I developed an email web server, harnessing the power of React.js, Express.js, Node.js, OpenAPI, and PostgreSQL to deliver a robust and efficient system.
            </p>
            */}
            <br />
            <p>
            Presently, I serve as a software engineer at Nawcwd, where I'm deeply engaged in developing high-performance software tailored to compute signal processing algorithms.
            I am passionate about optimizations in algorithms, the intricacies of operating systems, and creating full-stack applications.
            The challenges posed by these domains encapsulate the very essence of what I envision computer science to be - continually pushing the boundaries of innovation, unraveling these complex systems, and the ability to conceive and develop applications to fruition.
            </p>
            <br />
            <p>
              You can find out more about my academic journey, software engineering career, and personal projects. You can view my full professional <span className="text-gray-50 hover:text-teal-400 hover:cursor-pointer" onClick={() => window.open("Resume.pdf", "_blank")}>resume</span> here as well.
            </p>
            {/*
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-slate-400">
                HIRE ME.
              </span>{" "}
              PLEASE. You should also give my friend valeria a job as well
            </p>
          */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Biography;