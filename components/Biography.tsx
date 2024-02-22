import React, { useEffect } from "react"

const Biography = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/workapi');
      const jsonData = await response.json();
      console.log(jsonData);
    };
  
    fetchData();
  }, []);

  return (
    <section id="about">
      <div className="pb-12 md:pt-16 md:pb-48">
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left text-gray-50">
          <div className="text-wrap md:pr-40">
            <p>
              Hi, my name is Brady and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Oxnard, Ca.
            </p>
            <br />
            <p>
              I graduated from University of California, Santa Cruz in 2023
              with a BS in Computer Science and have been working in the
              field ever since.
            </p>
            <br />
            <p>
              I have been trying not to kms here.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-gray-50">
                HIRE ME.
              </span>{" "}
              PLEASE. You should also give my friend valeria a job as well
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Biography;