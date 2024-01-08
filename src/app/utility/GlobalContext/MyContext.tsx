"use client";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { createContext } from "react";

export type TypeValue = {
  totalCommand?: string[];
  setTotalCommand?: Dispatch<SetStateAction<string[]>>;
};

// Create Context
export const MyContext = createContext<TypeValue>({
  totalCommand: [],
  setTotalCommand: () => "",
});

export const WrapperContextClient = ({ children }: { children: ReactNode }) => {
  const [totalCommand, setTotalCommand] = useState<string[]>(["default"]);

  return (
    <MyContext.Provider value={{ totalCommand, setTotalCommand }}>
      {children}
    </MyContext.Provider>
  );
};

export default WrapperContextClient;
