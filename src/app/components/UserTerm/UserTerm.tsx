'use client'
import { usePathname } from "next/navigation";
import React from "react";

function UserTerm({ children = "" }: { children?: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div role="TerminalContent" id="TerminalContent" className="drop-shadow">
      <span className="lowercase text-primary">root@</span>
      <span className="lowercase text-primary">erlanggaht</span>
      <span>:</span>
      <span className="text-danger">-</span>
      <span className="text-secondary">$</span>
      {pathname !== '/' ? <><span className="text-secondary "> ~{pathname} </span><br/></>  : ""}

      {children}
    </div>
  );
}

export default UserTerm;
