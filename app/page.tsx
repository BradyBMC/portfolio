"use client"
import Biography from "@/components/Biography"
import Languages from "@/components/Languages"
import Title from "@/components/Title"
import React, { useState, useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const handleWheelScroll = (event: WheelEvent) => {
      const delta = event.deltaY || event.detail;
      const scrollAmount = 50; // Adjust scroll amount as needed
      const grid = document.getElementById('grid-container');

      if (delta < 0) {
        // Scroll Down
        if (grid) {
          grid.scrollTop -= scrollAmount;
        }
      } else {
        // Scroll Up
        if (grid) {
          grid.scrollTop += scrollAmount;
        }
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
            <div className="bg-blue-950 h-screen overflow-hidden divide-y divide-blue-200" id='grid-container'>
              <Biography />
              <div className="h-96">Work Exp</div>
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