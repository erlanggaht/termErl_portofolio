import { TypeValue } from "@/app/@types/MyContext";
import { Dispatch, SetStateAction } from "react";
import validator from "validator";


function useFirstNextClick (
  setNextStep?: Dispatch<SetStateAction<number>>,
  setInput?: Dispatch<SetStateAction<string | number | undefined>>,
  valueCommand: string = "",
  contextCommand?: TypeValue
  )  {
    setNextStep?.(prev => prev + 1)
    setInput?.(valueCommand)

       // @ts-ignore
       contextCommand?.setTotalCommand((prev:number[]) => {
          return [
            ...prev,
            validator.trim(valueCommand!.toString().toLocaleLowerCase()),
          ]
        });
    
}

export default useFirstNextClick