"use client";
import { useContext } from "react";
import Command from "@/app/components/Command/Command";
import Terminal from "@/app//components/Terminal/Terminal";
import UserTerm from "@/app/components/UserTerm/UserTerm";
import { MyContext } from "@/app//utility/GlobalContext/MyContext";
import { useRouter } from "next/navigation";
import { RoleCatFile, RoleRoute } from "@/app/utility/roleCommand/roleCommands";

export default function Home() {
  const router = useRouter();
  const { totalCommand, setTotalCommand } = useContext(MyContext);

  const conditionCommand = (index: number) => {
    const lastIndexTextInput = totalCommand?.[index + 1]
    
    // find cdRoute
    const cdRoute = RoleRoute.find((root) => root.command == lastIndexTextInput);
    
    // find catFile
    const catFile = RoleCatFile.find((file) => file.command == lastIndexTextInput)

    if (index !== totalCommand!.length - 1) {
      switch (lastIndexTextInput) {
        case "ls":
          return (
            <div role="resultCommand">
              <p role="folderRoute">project</p>
            </div>
          );
          case "cd .." : 
          setTotalCommand?.(["default"]);
          router.replace('/')
          case cdRoute?.command:
            if (cdRoute?.link) {
              setTotalCommand?.(["default"]);
              router.push(cdRoute.link);
            }
            break;
        case 'clear':
          setTotalCommand?.(["default"]);
        default:
          return (
            <p className="font-thin">
              {lastIndexTextInput}: command not found
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
