"use client";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { createContext } from "react";

export type TypeValue = {
  totalCommand?: string[],
  setTotalCommand?: Dispatch<SetStateAction<string[]>>,
  nextStep?: number,
  setNextStep?: Dispatch<SetStateAction<number>>
};

// Create Context
export const MyContext = createContext<TypeValue>({
  totalCommand: [],
  setTotalCommand: () => "",
});

export const WrapperContextClient = ({ children }: { children: ReactNode }) => {
  const [totalCommand, setTotalCommand] = useState<string[]>(["default"]);
  const [nextStep,setNextStep] = useState<number>(0)


  return (
    <MyContext.Provider value={{ totalCommand, setTotalCommand, nextStep,setNextStep }}>
      {children}
    </MyContext.Provider>
  );
};

export default WrapperContextClient;
