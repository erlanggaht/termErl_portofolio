"use client";
import React, { Dispatch, ReactNode, SetStateAction, use, useState } from "react";
import { createContext } from "react";

type TypeSetRunProject = {
  active: boolean,
  link: string
}

export type TypeValue = {
  totalCommand?: string[],
  setTotalCommand?: Dispatch<SetStateAction<string[]>>,
  nextStep?: number,
  setNextStep?: Dispatch<SetStateAction<number>>,
  visit?: any,
  historyInput?: string,
  setHistoryInput?:  Dispatch<SetStateAction<string>>,
  clear?: boolean,
  setClear?: Dispatch<SetStateAction<boolean>>,
  runProject?: TypeSetRunProject,
  setRunProject?: Dispatch<SetStateAction<TypeSetRunProject>>,
  openProject?: boolean,
  setOpenProject?: Dispatch<SetStateAction<boolean>>,
  modeGUI?: boolean,
  setModeGUI?: Dispatch<SetStateAction<boolean>>,
  selectMode?: boolean
  setSelectMode?: Dispatch<SetStateAction<boolean>>,
};

// Create Context
export const MyContext = createContext<TypeValue>({});

export const WrapperContextClient = ({ children }: { children: ReactNode }) => {
  const [totalCommand, setTotalCommand] = useState<string[]>(["default"]);
  const [nextStep,setNextStep] = useState<number>(0)
  const [historyInput,setHistoryInput] = useState<string>('')
  const [clear,setClear] = useState<boolean>(false)
  const [modeGUI,setModeGUI] = useState<boolean>(true)
  const [selectMode,setSelectMode] = useState<boolean>(false)
  
  const [openProject,setOpenProject] = useState<boolean>(false)
  const [runProject,setRunProject] = useState<TypeSetRunProject>({
    active : false,
    link : ""
  })

    // hover opacity effect
    React.useEffect(() => {
      const body = document?.querySelector("body")
      const terminal = document?.getElementById('Terminal')
      if (body && terminal) {
        const handleMouseOver = () => {
          terminal.style.opacity = '1';
        };
        const handleMouseOut = () => {
          terminal.style.opacity = '0.8';
        }
        body.addEventListener("mouseover", handleMouseOver)
        body.addEventListener("mouseout", handleMouseOut)
        return () => {
          body.removeEventListener('mouseover', handleMouseOver)
          body.removeEventListener('mouseover', handleMouseOut)
        }
      }
    }, [])
  
  
  // verification visit one time
  let stateVisit;
  const [visit,setVisit] = useState<any>(stateVisit)
    React.useEffect(() => {
        const getVisit = sessionStorage.getItem('visit');
        if(!getVisit) sessionStorage.setItem('visit',JSON.stringify(1))
        else {
        sessionStorage.setItem('visit',JSON.stringify(parseInt(getVisit) + 1))
        setTimeout(() => {
        sessionStorage.setItem('visit',JSON.stringify(parseInt(getVisit)))
        },0)
      }

        if (getVisit !== null && parseInt(getVisit) >= 2) {
          setVisit(getVisit)
          stateVisit = getVisit
          setSelectMode(true)
      }
     
    },[])
    
  return (
    <MyContext.Provider value={{ 
      totalCommand, 
      setTotalCommand,
      nextStep,
      setNextStep, 
      visit, 
      historyInput,
      setHistoryInput,
      clear,
      setClear,
      runProject,
      setRunProject,
      openProject,
      setOpenProject,
      modeGUI,
      setModeGUI,
      selectMode,
      setSelectMode
      }}>
      {children}
    </MyContext.Provider>
  );
};

export default WrapperContextClient;
