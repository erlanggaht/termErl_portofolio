'use client'
import React, { useContext } from "react";
import { MyContext } from "../utility/GlobalContext/MyContext";
import TerminalRunProject from "./Terminal/TerminalRunProject";
import KbdShortcut from "./KbdShortcut/KbdShortcut";
import OpacityFadeEffect from "../utility/OpacityFadeEffect/OpacityFadeEffect";
import { usePathname } from "next/navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { openProject, runProject, selectMode, setSelectMode, setModeGUI, modeGUI } = useContext(MyContext)
  const pathName = usePathname()

  // Fade Effect  
  OpacityFadeEffect()

  const setModes = (active: boolean) => {
    setModeGUI?.(active)
    setSelectMode?.(false)
  }

  console.log(openProject)
  return (
    <>

      <div className="fixed top-2 right-3">
        <span className="font-thin text-sm ">Mode {modeGUI ? "GUI" : "CLI"} (active)</span>
      </div>

      {/* Shortcut KBD */}
      {
        modeGUI && <div id="Shortcut" className={`fixed top-20 left-4  ${runProject?.active && 'hidden'}`}>
          <div className="text-xs px-1 pb-2 text-gray-500">
            <span className="pb-1 inline-block">shortcut:</span>
            <br />
            <span><span className="text-secondary">ls/pwd/list:</span> view list directory</span>
            <br />
            <span><span className="text-secondary">clear:</span> clear terminal</span>
            <br />
            <span><span className="text-secondary">cd ..:</span> back route </span>
          </div>
          <div className="flex max-w-[320px] flex-wrap gap-1 gap-y-2">
            <KbdShortcut value="ls/list/pwd" runValue="list" />
            <KbdShortcut value="clear" runValue="clear" />
            {pathName === '/' ? <KbdShortcut value="cd .." runValue="" disabled={true} /> : <KbdShortcut value="cd .." runValue="cd .." />}
          </div>
        </div>
      }
      <main className={`${runProject?.active ? "grid grid-cols-3 gap-2" : "mx-auto w-[1250px]"}  px-6 py-20 relative`}>
        <div className="col-span-2">
          {children}
        </div>
        <div className={`${runProject?.active ? "flex justify-center items-end" : "absolute bottom-12 right-16"}`}>
          {openProject && <TerminalRunProject />}
        </div>
      </main>


      {/* Select Mode Terminal */}
      {
        selectMode &&
        <>
          <div className="absolute bottom-12 right-56 z-[500]">
            <div id='TerminalSelectMode' className={`border border-darkness rounded-lg h-[320px] overflow-hidden  w-[420px] shadow bg-gradient-to-b from-body to-[#151515] z-[9999]`}>
              <div className="bg-darkness-100 rounded-t-md relative">
                <p className="absolute right-3 top-2 cursor-pointer hover:opacity-80" onClick={() => setModes(true)}>✕</p>
                <span className="p-1 px-2 mt-1 ml-2  w-full rounded-t-md inline-block  ">
                  Select Mode Terminal
                </span>
              </div>
              <div role="areaContentProject" className="mt-2 h-[78%] pt-2 overflow-auto">
                <ul className="text-white">
                  <li className="p-1 px-4 cursor-pointer hover:bg-white hover:text-link" onClick={() => setModes(true)}>Mode GUI</li>
                  <li className="p-1 px-4 cursor-pointer hover:bg-white hover:text-link" onClick={() => setModes(false)}>Mode CLI</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full h-screen fixed top-0 left-0 right-0 bottom-0 bg-[#111] opacity-70">
          </div>
        </>
      }
    </>
  );
}
