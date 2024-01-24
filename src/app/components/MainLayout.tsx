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

  return (
    <>    
    <main className={`${runProject?.active ? "" : "mx-auto"} w-full px-6 py-20 md:max-w-[1340px] relative`}>
      {openProject && <TerminalRunProject/>}
      {children}
    </main>
    </>
  );
}
