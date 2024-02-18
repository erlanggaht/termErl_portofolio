import { MyContext } from "@/app/utility/GlobalContext/MyContext";
import {useContext} from 'react'
import useFirstNextClick from "../../useFirstOnNextClick";
import { usePathname } from "next/navigation";
import { TypeValue } from "@/app/@types/MyContext";

const stepsHome: any = (
  setInput: React.Dispatch<React.SetStateAction<string | number | undefined>>,
  contextCommand: TypeValue,
) => {
  const pathname = usePathname()
  const { setNextStep,setSelectMode} = useContext(MyContext);

   
if(pathname === '/') return [
     { element: '#Terminal', popover: { title: 'Hello, to use TermErl', description: 'this is the terminal section', side: "bottom", align: 'start', onNextClick: () => {
       setNextStep?.((prev:number) => prev + 1);
     }} },
     { element: '#TerminalContent:nth-child(1)', popover: { title: 'CLI', description: 'type "ls" to see the route list and route files', side: "left", align: 'end',onNextClick: () => {
       useFirstNextClick(setNextStep,setInput,"ls",contextCommand)
     }}},
     { element:'#TerminalContent:nth-child(2)', popover: { title: 'CLI', description: 'You need to type "cat about me" first.', side: "bottom", align: 'start',onNextClick: () => {
       useFirstNextClick(setNextStep,setInput,"cat about me",contextCommand)
       setSelectMode?.(true)
     }}},
   ]  
}  

export default stepsHome;