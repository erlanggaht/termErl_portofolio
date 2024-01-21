import React, { useContext, useEffect, useState } from "react";
import { MyContext, TypeValue } from "@/app/utility/GlobalContext/MyContext";
import validator from "validator";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import useFirstNextClick from "@/app/utility/hooks/driverjs/useFirstOnNextClick";
import { usePathname } from "next/navigation";

function Command({
  active = false,
  contextCommand,
  children,
  driverActive = true,
}: {
  valueInput?: string | number;
  active?: boolean;
  contextCommand?: TypeValue;
  children?: React.ReactNode;
  driverActive?: boolean;
}) {
  const pathname = usePathname()
  const [input, setInput] = useState<string | number>();
  const { nextStep, setNextStep } = useContext(MyContext);

  const driverObj = driver({
    animate: true,
    showProgress: true,
    showButtons: ['next', 'close'],
    doneBtnText: 'Finish',
    steps: [
      { element: 'body', popover: { title: 'Hello, to use TermErl', description: 'this is the terminal section', side: "left", align: 'end', onNextClick: () => {
        setNextStep?.(prev => prev + 1);
      }} },
      { element: '#TerminalContent:nth-child(1)', popover: { title: 'CLI', description: 'type "ls" to see the route list and route files', side: "left", align: 'end',onNextClick: () => {
        useFirstNextClick(setNextStep,setInput,"ls",contextCommand)
      }}},
      { element: '#TerminalContent:nth-child(2)', popover: { title: 'CLI', description: 'You need to type "cat about me" first.', side: "bottom", align: 'start',onNextClick: () => {
        useFirstNextClick(setNextStep,setInput,"cat about me",contextCommand)
      }}},
    ]
  });
  
  useEffect(() => {
    if(driverActive || pathname === '/') driverObj.drive(nextStep)
  }, [nextStep])

  const HandleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Event Keyboard Enter
    if (e.code === "Enter" && input) {
      setTimeout(() => {
        setNextStep?.(prev => prev + 1);
      },0)
      // @ts-ignore
      contextCommand.setTotalCommand((prev) => {
        return [
          ...prev,
          validator.trim(input?.toString().toLocaleLowerCase()),
        ]
      });
    }

  
  };

  
  return (
    <>
      {active  ? (
        <InputCommand
          value={input}
          onKeydown={HandleEnter}
          onChange={(e) => setInput(validator.trim(e.target.value))}
          disabled={active}
        />
      ) : (
        <InputCommand
          value={input}
          onKeydown={HandleEnter}
          onChange={(e) => setInput(e.target.value)}
          disabled={active}
        />
      )}
      
      {children}
    </>
  );
}

export default Command;

const InputCommand = ({
  value = "",
  onChange,
  onKeydown,
  disabled,
}: {
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeydown?: (args1: React.KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      onKeyDown={onKeydown}
      disabled={disabled}
      className="bg-transparent px-1 font-thin focus:border-0 focus:outline-none w-[80%]"
      autoFocus
    />
  );
};
