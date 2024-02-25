"use client"
import Biography from "@/components/Biography"
import Languages from "@/components/Languages"
import Title from "@/components/Title"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import React, { useState, useEffect } from 'react'

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
      <div className="flex md:h-screen w-full">
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
                  <a href="#biography" className="md:pb-4">
                    Biography
                  </a>
                  <a href="#experience" className="md:pb-4">
                    Experience
                  </a>
                  <a href="#projects" className="md:pb-4">
                    Projects
                  </a>
                </li>
              </ul>
              <div>
                Github, Linkedin, 
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