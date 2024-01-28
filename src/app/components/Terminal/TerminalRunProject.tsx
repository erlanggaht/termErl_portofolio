'use client'
import { MyContext } from '@/app/utility/GlobalContext/MyContext'
import React,{useContext} from 'react'
import ListProject from './ListProject'
import useGetYearHistoryInputRun from '@/app/utility/hooks/useGetYearHistoryInput/useGetYearHistoryInput'

function TerminalRunProject() {
    const {setOpenProject,setRunProject,runProject} = useContext(MyContext)
    const getYearInput = useGetYearHistoryInputRun()


    const closeRunProject = () => {
        runProject?.active ?  "" : setOpenProject?.(false) 
        setRunProject?.({
            active: false,
            link:''
        })
    }
  
  return (
    <div id='TerminalRunProject' className={`border border-darkness rounded-lg h-[320px] overflow-hidden  w-[420px] shadow bg-gradient-to-b from-body to-[#151515] z-[9999]`}>
    <div className="bg-darkness-100 rounded-t-md relative">
      <p className="absolute right-3 top-2 cursor-pointer hover:opacity-80 " onClick={() => closeRunProject()}>✕</p>
      <span className="p-1 px-2 mt-1 ml-2  w-40 rounded-t-md inline-block  ">
        Project {getYearInput}
      </span>
    </div>
    <div role="areaContentProject" className="mt-2 h-[78%] pt-2 overflow-auto">
    <ul className="text-white">
      <ListProject/>
    </ul>
    </div>
    </div>
  )
}

export default TerminalRunProject
