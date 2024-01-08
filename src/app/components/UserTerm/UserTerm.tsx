import React from "react";

function UserTerm({ children = "" }: { children?: React.ReactNode }) {
  return (
    <div role="TerminalContent" id="TerminalContent" className="drop-shadow">
      <span className="lowercase text-primary">root@</span>
      <span className="lowercase text-primary">erlanggaht</span>
      <span>:</span>
      <span className="text-danger">-</span>
      <span className="text-secondary">$</span>

      {children}
    </div>
  );
}

export default UserTerm;
