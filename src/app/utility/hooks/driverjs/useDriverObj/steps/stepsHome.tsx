import { MyContext, TypeValue } from "@/app/utility/GlobalContext/MyContext";
import {useContext,useEffect} from 'react'
import useFirstNextClick from "../../useFirstOnNextClick";
import { usePathname } from "next/navigation";

const stepsHome: any = (
  setInput: React.Dispatch<React.SetStateAction<string | number | undefined>>,
  contextCommand: TypeValue,
) => {
  const pathname = usePathname()
  const { setNextStep} = useContext(MyContext);

   
if(pathname === '/') return [
     { element: 'body', popover: { title: 'Hello, to use TermErl', description: 'this is the terminal section', side: "left", align: 'end', onNextClick: () => {
       setNextStep?.(prev => prev + 1);
     }} },
     { element: '#TerminalContent:nth-child(1)', popover: { title: 'CLI', description: 'type "ls" to see the route list and route files', side: "left", align: 'end',onNextClick: () => {
       useFirstNextClick(setNextStep,setInput,"ls",contextCommand)
     }}},
     { element:'#TerminalContent:nth-child(2)', popover: { title: 'CLI', description: 'You need to type "cat about me" first.', side: "bottom", align: 'start',onNextClick: () => {
       useFirstNextClick(setNextStep,setInput,"cat about me",contextCommand)
     }}},
   ]  
}  

export default stepsHome;