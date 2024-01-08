import React, { useEffect } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

function Terminal({ children }: { children: React.ReactNode }) {

  useEffect(() => {
    const driverObj = driver({
      animate: true,
      showProgress: true,
      showButtons: ['next', 'previous', 'close'],
      steps: [
        { element: '#Terminal', popover: { title: 'Hello, to use TermErl', description: 'this is the terminal section', side: "left", align: 'start' } },
        { element: '#TerminalContent', popover: { title: 'CLI', description: 'You need to type "cat about" first.', side: "bottom", align: 'start' } },
        { element: '#TerminalContent:nth-child(2)', popover: { title: 'CLI', description: 'You need to type "cat about" first.', side: "bottom", align: 'start' } },
      ]
    });
    driverObj.drive();
    // driverObj.highlight({
    //   element: "#Terminal",
    //   popover: {
    //     title: "Title",
    //     description: "DescriptionasasasasaSADASDASFF"
    //   }
    // });
  }, [])

  return (
    <div
      role="terminal"
      id="Terminal"
      className="rounded-lg border border-darkness shadow-lg transition ease-out"
      style={{ opacity: 0.8 }}
    >
      <div className="flex items-center gap-1 rounded-t-md bg-darkness p-2 pb-0">
        <div className="">
          <div className="tabs flex items-center justify-between rounded-t-md bg-gradient-to-b from-body to-[#151515] p-2 text-white shadow md:w-[250px] md:max-w-[250px]" >
            <p className="h-[20px] max-w-[80%] overflow-hidden text-sm">
              Erlangga Hidayatullah
            </p>
            <p className="cursor-pointe text-sm">&#x2715;</p>
          </div>
        </div>

        <div className="inline-block flex-auto ">
          <span className="inline-block -translate-y-[1px] cursor-pointer rounded-tl-md px-1 hover:bg-hoverBg">
            &#65291;
          </span>
          <span className="inline-block -translate-y-[3px] text-xl opacity-30">
            &#x7C;
          </span>
        </div>
      </div>

      <div className="h-[80vh] overflow-auto  p-3">{children}</div>
    </div>
  );
}

export default Terminal;
