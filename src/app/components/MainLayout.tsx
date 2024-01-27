'use client'
import React,{useContext}  from "react";
import { MyContext } from "../utility/GlobalContext/MyContext";
import TerminalRunProject from "./Terminal/TerminalRunProject";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {openProject,runProject} = useContext(MyContext)

  // hover opacity effect
  React.useEffect(() => {
    const body = document?.querySelector("body")
    const terminal = document?.getElementById('Terminal')
    if(body && terminal) {
      const handleMouseOver = () => {
        terminal.style.opacity = '1';
      };
      const handleMouseOut = () => {
        terminal.style.opacity = '0.8';
      }
      body.addEventListener("mouseover",handleMouseOver)
      body.addEventListener("mouseout",handleMouseOut)
      return () => {
        body.removeEventListener('mouseover',handleMouseOver)
        body.removeEventListener('mouseover',handleMouseOut)
      }
    }
  }, [])

  // Fade
  React.useEffect(() => {
    document.body.classList.add('fade');
    setTimeout(() => {
    document.body.className = '';
    }, 1201);
  },[])

  React.useEffect(() => {
    if(openProject) {
      console.log('oke')
      document.querySelector("#TerminalRunProject")?.classList.add('fade')
      setTimeout(() => {
        document.querySelector("#TerminalRunProject")?.classList.remove('fade')
      }, 100);
    }
  },[openProject])

  return (
    <>    
    <main className={`${runProject?.active ? "grid grid-cols-3 gap-2" : "mx-auto w-[1360px]"} w-full px-6 py-20 relative`}>
      <div className="col-span-2">
      {children}
      </div>
      <div className={`${runProject?.active ? "flex justify-center items-end" : "absolute bottom-12 right-16"}`}>
      {openProject && <TerminalRunProject/>}
      </div>
    </main>
    </>
  );
}
