"use client";
import { useContext } from "react";
import Command from "@/app/components/Command/Command";
import Terminal from "@/app//components/Terminal/Terminal";
import UserTerm from "@/app/components/UserTerm/UserTerm";
import { MyContext } from "@/app//utility/GlobalContext/MyContext";
import { useRouter } from "next/navigation";
import { RoleCatFile, RoleRouteRoot } from "@/app/utility/roleCommand/roleCommands";

export default function Home() {
  const router = useRouter();
  const { totalCommand, setTotalCommand } = useContext(MyContext);


  const conditionCommand = (index: number) => {
    const lastIndexText = totalCommand?.[index + 1]
    
    // find cdRoute
    const cdRoute = RoleRouteRoot.find((root) => root.command == lastIndexText);
    

    // find catFile
    const catFile = RoleCatFile.find((file) => file.command == lastIndexText)

    if (index !== totalCommand!.length - 1) {
      switch (lastIndexText) {
        case "ls":
          return (
            <div role="resultCommand">
              <p role="fileRoute">about</p>
              <p role="fileRoute">learn_app</p>
              <p role="folderRoute">document</p>
              <p role="folderRoute">project</p>
            </div>
          );
        case cdRoute?.command:
          if (cdRoute?.link) {
            setTotalCommand?.(["default"]);
            router.replace(cdRoute.link);
          }
          break;
        case catFile?.command:
          if (catFile?.command === 'cat learn_app') {
            return (
              <div role="resultCommand">
                <span>'cd home' ( back to home )</span>
              </div>
            )
          }
          else if (catFile?.command === 'cat about') {
           return (
             <div role="resultCommand">
              <span>Hello My Name Erlangga Hidayatullah</span>
            </div>
           )
          }

        case 'clear':
          setTotalCommand?.(["default"]);
        default:
          return (
            <p className="font-thin">
              {lastIndexText}: command not found
            </p>
          );
      }
    }
  };

  return (
    <div>
      <Terminal>
        {totalCommand?.length === 0 ? (
          <UserTerm>
            <Command
              contextCommand={{ totalCommand, setTotalCommand }}
              active={false}
              driverActive={false}
            />
          </UserTerm>
        ) : (
          totalCommand?.map((m, i) => {
            return (
              <UserTerm key={i}>
                <Command
                  contextCommand={{ totalCommand, setTotalCommand }}
                  active={i === totalCommand.length - 1 ? false : true}
                  driverActive={false}
                >
                  {conditionCommand(i)}
                </Command>
              </UserTerm>
            );
          })
        )}

        { }
      </Terminal>
    </div>
  );
}
