'use client'
import React  from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // hover opacity effect
  React.useEffect(() => {
    document?.querySelector('body')?.addEventListener('mouseover',(e) => {
       document!!.getElementById('Terminal')!.style.opacity = '1';
       document!!.querySelector('body')?.addEventListener('mouseout',(e) => {
         document!!.getElementById('Terminal')!.style.opacity = '0.8';
       })

    })
  }, [])

  return (
    <main className="mx-auto w-full px-6 py-20 md:max-w-[1240px] relative">
      {children}
    </main>
  );
}
