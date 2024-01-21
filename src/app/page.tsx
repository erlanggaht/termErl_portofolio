"use client";
import { useContext} from "react";
import Command from "./components/Command/Command";
import Terminal from "./components/Terminal/Terminal";
import UserTerm from "./components/UserTerm/UserTerm";
import { MyContext } from "./utility/GlobalContext/MyContext";
import { useRouter } from "next/navigation";
import { RoleCatFile, RoleRoute } from "./utility/roleCommand/roleCommands";
import Teks from "./utility/Text/text";

export default function Home() {
  const router = useRouter();
  const { totalCommand, setTotalCommand } = useContext(MyContext);
  const {about,list_command,list_directory} = Teks()

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
        case cdRoute?.command:
          if (cdRoute?.link) {
            setTotalCommand?.(["default"]);
            router.replace(cdRoute.link);
          }
          break;
        case catFile?.command:
          if (catFile?.command === 'cat list command') {
            return (
              <div role="resultCommand">
                <h2 className="pb-2">Home:</h2>
                <hr  className="border-darkness"/>
                <div className="grid grid-cols-3 pt-2">
                <p>{list_command?.htmllist_command_Other}</p>
                <p>{list_command?.htmllist_command_Route}</p>
                <p>{list_command?.htmllist_command_CatFile}</p>
                </div>
              </div>
            )
          }
          else if (catFile?.command === 'cat about me') {
           return (
             <div role="resultCommand">
              <span>{about}</span>
            </div>
           )
          }

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

  // if(loadingPage) {
  //   return  <div className="fixed w-screen h-screen flex justify-center items-center"><LoadingPage/></div>
  // }
   
  return (
    <div>
      <Terminal>
        {totalCommand?.length === 0 ? (
          <UserTerm>
            <Command
              contextCommand={{ totalCommand, setTotalCommand }}
              active={false}
            />
          </UserTerm>
        ) : (
          totalCommand?.map((m, i) => {
            return (
              <UserTerm key={i}>
                <Command
                  contextCommand={{ totalCommand, setTotalCommand }}
                  active={i === totalCommand.length - 1 ? false : true}
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
