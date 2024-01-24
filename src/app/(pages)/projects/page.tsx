"use client";
import { useContext } from "react";
import Command from "@/app/components/Command/Command";
import Terminal from "@/app//components/Terminal/Terminal";
import UserTerm from "@/app/components/UserTerm/UserTerm";
import { MyContext } from "@/app//utility/GlobalContext/MyContext";
import { useRouter } from "next/navigation";
import { RoleCatFile, RoleRoute, RoleRunFile, RoutesNot } from "@/app/utility/roleCommand/roleCommands";
import Teks from "@/app/utility/Text/Projects/text";

export default function Home() {
  const router = useRouter();
  const { totalCommand, setTotalCommand,setClear,setOpenProject } = useContext(MyContext);
  const {list_command,list_directory} = Teks()
  const conditionCommand = (index: number) => {
    const lastIndexTextInput = totalCommand?.[index + 1]
    
    // find cdRoute
    const cdRoute = RoleRoute.find((root) => root.command == lastIndexTextInput);
    
    // find catFile
    const catFile = RoleCatFile.find((file) => file.command == lastIndexTextInput)

    
    // find runFile
    const runFile = RoleRunFile().find((file) => file.command == lastIndexTextInput?.split(' ')[1])

    if (index !== totalCommand!.length - 1) {
      switch (lastIndexTextInput) {
        case "ls":
          return (
            <div role="resultCommand">
              {list_directory}
            </div>
          );
          case 'pwd': 
          return (
            <div role="resultCommand">
            {list_directory}
          </div>
        );
        case "cd .." : 
        setTotalCommand?.(["default"]);
        router.replace('/')
        break;
        case 'clear':
        setClear?.(true)
        break;

        // Section Not Command Other
          case cdRoute?.command:
            if (cdRoute?.link) {
              const RoutesNotRedirect = RoutesNot.find(m => m === cdRoute?.link?.split('/')[1])
              if(!RoutesNotRedirect) {
                setTotalCommand?.(["default"]);
                router.push(cdRoute.link)
              }
              else return <p className="font-thin">
              {lastIndexTextInput}: command not found
            </p>
            }
            break;
            case catFile?.command:
              if (catFile?.command === 'cat list command') {
                return (
                  <div role="resultCommand">
                    <h2 className="pb-2">Projects:</h2>
                    <hr  className="border-darkness"/>
                    <div className="grid grid-cols-3 pt-2">
                    <p> {list_command?.htmllist_command_Other}</p>
                    <p>
                    {list_command?.htmllist_command_CatFile}
                    {list_command?.htmllist_command_RunFile}
                    </p>
                    </div>
                  </div>
                )
              }
              case `run ${runFile?.command}`:
                setOpenProject?.(true)
                setTotalCommand?.(['default'])
                break;
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
