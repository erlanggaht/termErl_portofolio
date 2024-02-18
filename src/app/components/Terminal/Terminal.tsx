'use client'
import toggleFullScreen from "@/app/utility/FullscreenToggle/fullscreenToggle";
import { MyContext } from "@/app/utility/GlobalContext/MyContext";
import { usePathname } from "next/navigation";
import {useContext} from "react";


function Terminal({ children }: { children: React.ReactNode }) {
  const pathName = usePathname()
  const {runProject,setClear,setSelectMode} = useContext(MyContext)
  // Fullscreen Mode
  const fullScreenMode = () => {
    if(runProject?.active && pathName === '/projects') toggleFullScreen('iframe')
    else toggleFullScreen('body')
  }

  return (
    <div
      role="terminal"
      id="Terminal"
      className="rounded-lg border border-darkness shadow-lg transition ease-out md:w-[80%] w-full mx-auto "
      style={{ opacity: 0.8 }}
    >
      <div className="flex items-center gap-1 rounded-t-md bg-darkness p-2 pb-0">
        <div className="">
          <div className="tabs flex items-center justify-between rounded-t-md bg-gradient-to-b from-body to-[#151515] p-2 text-white shadow md:w-[250px] md:max-w-[250px]" >
            <p className="h-[20px] max-w-[80%] overflow-hidden text-sm">
              Erlangga Hidayatullah
            </p>
            <p className="cursor-pointer text-sm" onClick={() => setClear?.(true) }>&#x2715;</p>
          </div>
        </div>

        <div className="flex justify-between  flex-auto ">
          <div>
          <span className="md:inline-block hidden -translate-y-[1px] cursor-pointer rounded-tl-md px-1 hover:bg-hoverBg ">
            &#65291;
          </span>
          <span className="md:inline-block hidden -translate-y-[3px] text-xl opacity-30">
            &#x7C;
          </span>
          <span className="inline-block -translate-y-[2px] cursor-pointer rounded-tl-md px-1 hover:bg-hoverBg has-tooltip "  onClick={() => setSelectMode(true)}>
          <span className='tooltip rounded shadow p-1 bg-white text-primary -mt-8 text-sm w-32 text-center'>Mode CLI/GUI</span>
          &#8943; 
          </span>
          </div>
          <div className="flex gap-6 font-bold mr-2">
          <p className="-translate-y-[9px] hover:cursor-pointer translate-x-[10px] md:translate-x-[0px] ">&#x1F5D5;</p>
          <div className="w-[12px] h-[12px] border-2 translate-y-[5px] hover:cursor-pointer rounded-sm" onClick={() => fullScreenMode()}></div>
          <p className="cursor-pointer text-sm font-bold">&#x1F5D9;</p>
          </div>
        </div>
      </div>

      {runProject?.active ? 
      <div className="h-[80vh]"> 
      <iframe src={runProject.link} height={'100%'} width={'100%'}/> 
      </div> 
      :
      <div className="lg:h-[75vh]  h-[55vh] overflow-auto  p-3">
        {children}
      </div>
      }

    </div>
  );
}

export default Terminal;
