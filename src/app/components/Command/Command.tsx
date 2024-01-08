import React, { useState } from "react";
import { TypeValue } from "@/app/utility/GlobalContext/MyContext";
import validator from "validator";

function Command({
  valueInput,
  active = false,
  contextCommand,
  children,
}: {
  valueInput?: string | number;
  active?: boolean;
  contextCommand?: TypeValue;
  children?: React.ReactNode;
}) {
  const [input, setInput] = useState<string | number>();

  const HandleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Event Keyboard Enter
    if (e.key === "Enter" && input) {
      // @ts-ignore
      contextCommand.setTotalCommand((prev) => [
        ...prev,
        validator.trim(input?.toString().toLocaleLowerCase()),
      ]);
    }
  };

  return (
    <>
      {active ? (
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
      className="bg-transparent px-2  font-thin focus:border-0 focus:outline-none"
      autoFocus
    />
  );
};
