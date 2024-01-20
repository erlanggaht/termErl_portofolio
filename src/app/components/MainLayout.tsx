'use client'
import React  from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // hover opacity effect
  React.useEffect(() => {
    const body = document?.querySelector("body")
    const terminal = document?.getElementById('terminal')

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
    <main className="mx-auto w-full px-6 py-20 md:max-w-[1240px] relative">
      {children}
    </main>
    </>
  );
}
