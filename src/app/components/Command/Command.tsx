import React, { useContext, useState } from "react";
import { MyContext } from "@/app/utility/GlobalContext/MyContext";
import validator from "validator";
import "driver.js/dist/driver.css";
import useDriverObj from "@/app/utility/hooks/driverjs/useDriverObj/useDriverObj";
import { TypeValue } from "@/app/@types/MyContext";

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
  const [input, setInput] = useState<string | number>();
  const { setNextStep, historyInput, setHistoryInput,} = useContext(MyContext);
  useDriverObj(setInput,contextCommand,driverActive)

  const HandleKeyboard = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement

    //  Event Keyboard Up
    if (e.code === 'ArrowUp') {
      setInput(historyInput)
    }

    //  Event Keyboard Up
    if (e.code === 'ArrowDown') {
      setInput('')
    }


    // Event Keyboard Enter
    if (e.code === "Enter" && input) {
      setTimeout(() => {
        setNextStep?.((prev:number) => prev + 1);
      }, 0)
      // @ts-ignore
      contextCommand.setTotalCommand((prev) => {
        return [
          ...prev,
          validator.trim(input?.toString().toLocaleLowerCase()),
        ]
      });
      setHistoryInput?.(target.value)
    }


  };


  return (
    <>
      {active ? (
        <InputCommand
          value={input}
          onKeydown={HandleKeyboard}
          onChange={(e) => setInput(validator.trim(e.target.value))}
          disabled={active}
        />
      ) : (
        <InputCommand
          value={input}
          onKeydown={HandleKeyboard}
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
