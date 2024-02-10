"use client"
import Biography from "@/components/Biography"
import Languages from "@/components/Languages"
import Title from "@/components/Title"
import React, { useState, useEffect } from 'react'

export default function Home() {
  // const leftRef = useRef<null | HTMLDivElement>(null); 
  // const rightRef = useRef<null | HTMLDivElement>(null); 
  /*
  const [scrollY, setScrollY] = useState(0);

  const useScrollEvent = (callback: (scrollY: number) => void) => {
    useEffect(() => {
      const handleScroll = () => {
        console.log('har')
        callback(window.scrollY);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [callback]);
  };

  useScrollEvent((scrollPosition) => {
    setScrollY(scrollPosition);
  });
  */
    useEffect(() => {
      const handleScroll = () => {
        console.log(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
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
            <div className="bg-blue-950 h-screen overflow-y-auto divide-y divide-blue-200">
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