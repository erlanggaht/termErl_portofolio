"use client";
import { useContext, useEffect, useState } from "react";
import Command from "./components/Command/Command";
import Terminal from "./components/Terminal/Terminal";
import UserTerm from "./components/UserTerm/UserTerm";
import { MyContext } from "./utility/GlobalContext/MyContext";
import { useRouter } from "next/navigation";
import { RoleCatFile, RoleRouteRoot } from "./utility/roleCommand/roleCommands";

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
            {/* <div role="resultCommand">
                <p role="folderRoute">Document</p>
                <p role="folderRoute">Project</p>
                <p role="fileRoute">About</p>
              </div> */}
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
