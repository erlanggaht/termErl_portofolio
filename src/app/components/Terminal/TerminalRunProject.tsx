'use client'
import { MyContext } from '@/app/utility/GlobalContext/MyContext'
import React,{useContext} from 'react'

function TerminalRunProject() {
    const {setOpenProject,setRunProject,runProject} = useContext(MyContext)
    
    const FnrunProject = () => {
        setRunProject?.({
            active: true,
            link: "https://erlanggahidayatullah.vercel.app"
          })
    }

    const closeRunProject = () => {
        setOpenProject?.(false)
        setRunProject?.({
            active: false,
            link:""
        })
    }
  return (
    <div className={`fixed ${runProject?.active ? "bottom-16" : "bottom-5"} right-32 border border-darkness rounded-lg h-[320px] w-[420px] shadow-xl bg-gradient-to-b from-body to-[#151515] z-[9999]`}>
    <div className="bg-darkness-100 rounded-t-md relative">
      <p className="absolute right-3 top-2 cursor-pointer hover:opacity-80 " onClick={() => closeRunProject()}>✕</p>
      <span className="p-1 px-2 mt-1 ml-2  w-40 rounded-t-md inline-block  ">
        Project
      </span>
    </div>
    <div role="areaContentProject" className="mt-2">
    <ul className="text-white">
      <li className="font-normal text-md cursor-pointer pt-1 px-2 hover:bg-white hover:text-link" onClick={() => FnrunProject() }>./BrainMe.web</li>
      <li className="font-normal text-md cursor-pointer pt-1 px-2 hover:bg-white hover:text-link">./BrainMe.web</li>
      <li className="font-normal text-md cursor-pointer pt-1 px-2 hover:bg-white hover:text-link">./BrainMe.web</li>
      <li className="font-normal text-md cursor-pointer pt-1 px-2 hover:bg-white hover:text-link">./BrainMe.web</li>
    </ul>
    </div>
    </div>
  )
}

export default TerminalRunProject
