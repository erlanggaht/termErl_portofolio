"use client";
import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { createContext } from "react";

export type TypeValue = {
  totalCommand?: string[],
  setTotalCommand?: Dispatch<SetStateAction<string[]>>,
  nextStep?: number,
  setNextStep?: Dispatch<SetStateAction<number>>,
  visit?: any,
  historyInput?: string | number,
  setHistoryInput?:  Dispatch<SetStateAction<number | string>>
};

// Create Context
export const MyContext = createContext<TypeValue>({});

export const WrapperContextClient = ({ children }: { children: ReactNode }) => {
  const [totalCommand, setTotalCommand] = useState<string[]>(["default"]);
  const [nextStep,setNextStep] = useState<number>(0)
  const [historyInput,setHistoryInput] = useState<number | string>('')
  
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
      setHistoryInput 
      }}>
      {children}
    </MyContext.Provider>
  );
};

export default WrapperContextClient;
