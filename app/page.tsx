"use client"
import Biography from "@/components/Biography"
import Languages from "@/components/Languages"
import Title from "@/components/Title"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import React, { useState, useEffect } from 'react'

import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa"

export default function Home() {
  useEffect(() => {
    const handleWheelScroll = (event: WheelEvent) => {
      const delta = event.deltaY || event.detail;
      const scrollAmount = 25; // Adjust scroll amount as needed
      const grid = document.getElementById('grid-container');

      if (delta < 0 && grid) {
        // Scroll Down
        grid.scrollTop -= scrollAmount;
      } else if (grid) {
        // Scroll Up
        grid.scrollTop += scrollAmount;
      }
    };

    window.addEventListener('wheel', handleWheelScroll);

    return () => {
      window.removeEventListener('wheel', handleWheelScroll);
    };
  }, []);

  return (
    <main className="mx-auto">
      <div className="flex md:h-screen">
        <div className="flex flex-1 grid grid-cols-1 md:grid-cols-2">
          <div className="flex-none bg-red-500 overflow-y-auto">
            <div className="bg-blue-950 grid md:h-screen no-scrollbar">
              <Title />
              <ul className="text-center text-gray-50" onClick={(event: React.SyntheticEvent) => {
                event.preventDefault();
                const target = event.target as HTMLAnchorElement;
                const id = target.getAttribute('href')?.replace('#', '');
                const element = document.getElementById(String(id));
                element?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}>
                <li className="grid md:text-lg">
                  <a href="#biography" className="bounce mb-6 hover:text-teal-300 md:pb-4">
                    Biography
                  </a>
                  <a href="#experience" className="bounce mb-6 hover:text-teal-300 md:pb-4">
                    Experience
                  </a>
                  <a href="#projects" className="bounce hover:text-teal-300 md:pb-4">
                    Projects
                  </a>
                </li>
              </ul>
              <div className="text-center space-x-16">
                <FaGithub className="w-10 h-10 text-gray-50 inline hover:cursor-pointer hover:text-teal-300" onClick={() => window.open("https://github.com/BradyBMC", "_blank")} />
                <FaLinkedin className="w-10 h-10 text-gray-50 inline hover:cursor-pointer hover:text-teal-300" onClick={() => window.open("https://www.linkedin.com/in/brady-chan-84416319a/", "_blank")} />
                <FaFileAlt className="w-10 h-10 text-gray-50 inline hover:cursor-pointer hover:text-teal-300" onClick={() => window.open("Resume.pdf", "_blank")} />
              </div>
            </div>
          </div>
          <div className="flex-1 grow bg-red-800 overflow-y-auto">
            <div className="bg-blue-950 md:h-screen overflow-hidden smooth-scroll divide-blue-200" id="grid-container">
              <Biography />
              <Experience />
              <Projects />
              {/*<Languages />*/}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}