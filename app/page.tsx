"use client"
import Biography from "@/components/Biography"
import Languages from "@/components/Languages"
import Title from "@/components/Title"
import Experience from "@/components/Experience"
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
      <div className="flex h-screen w-full">
        <div className="flex flex-1 grid grid-cols-1 md:grid-cols-2">
          <div className="flex-none bg-red-500 overflow-y-auto">
            <div className="flex-none bg-blue-950 grid h-screen no-scrollbar">
              <Title />
            </div>
          </div>
          <div className="flex-1 grow bg-red-800 overflow-y-auto">
            <div className="bg-blue-950 h-screen overflow-hidden smooth-scroll divide-y divide-blue-200" id="grid-container">
              <Biography />
              <Experience />
              <div className="h-96">Projects</div>
              <Languages />
              <div className="h-96">last scroll</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}