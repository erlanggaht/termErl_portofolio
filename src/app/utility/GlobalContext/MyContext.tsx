"use client";
import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
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
  setOpenProject?: Dispatch<SetStateAction<boolean>>
};

// Create Context
export const MyContext = createContext<TypeValue>({});

export const WrapperContextClient = ({ children }: { children: ReactNode }) => {
  const [totalCommand, setTotalCommand] = useState<string[]>(["default"]);
  const [nextStep,setNextStep] = useState<number>(0)
  const [historyInput,setHistoryInput] = useState<string>('')
  const [clear,setClear] = useState<boolean>(false)
  
  const [openProject,setOpenProject] = useState<boolean>(false)
  const [runProject,setRunProject] = useState<TypeSetRunProject>({
    active : false,
    link : ""
  })
  
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
      setOpenProject
      }}>
      {children}
    </MyContext.Provider>
  );
};

export default WrapperContextClient;
