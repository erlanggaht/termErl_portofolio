export type TypeRoleCommands = {
  command?: string;
  link?: string;
  description?: string;
  type?: string;
};

export interface InterfaceRoleRoute extends TypeRoleCommands {}
export interface InterfaceRoleCatFile extends TypeRoleCommands {}
export interface InterfaceRoleRunFile extends TypeRoleCommands {
  type: "projects";
}
export interface InterfaceRoleOther extends TypeRoleCommands {}

// Role Command
export const RoleCommand: TypeRoleCommands[] = [
  {
    command: "ls",
  },
  {
    command: "pwd",
  },
  {
    command: "cd",
  },
  {
    command: "cat",
  },
  {
    command: "run",
  },
];

// Role cd Route
export const RoutesNot: string[] = ["document", "projects"];
export const RoleRoute: InterfaceRoleRoute[] = [
  {
    command: "cd ..",
    link: "",
  },
  {
    command: "cd home",
    link: "/home",
  },
  {
    command: "cd /",
    link: "/home",
  },
  {
    command: "cd ~",
    link: "/home",
  },
  {
    command: "cd document",
    link: "/document",
  },
  {
    command: "cd projects",
    link: "/projects",
  },
];

// Role cat file

export const RoleCatFile: InterfaceRoleCatFile[] = [
  {
    command: "cat about me",
    type: "home",
  },
  {
    command: "cat list command",
    type: "all",
  },
];

// Role run file
export const projectsFile: string[] = [
  "project_2020.erl",
  "project_2021.erl",
  "project_2022.erl",
  "project_2023.erl",
  "project_2024.erl",
];

export const RoleRunFile = () => {
  let ProjectEachResult: InterfaceRoleRunFile[] = [];
  projectsFile.forEach((m) => {
    ProjectEachResult.push({
      command: m,
      type: "projects",
    });
  });
  return ProjectEachResult;
};

// Role Other

export const RoleOther: InterfaceRoleOther[] = [
  {
    command: "ls",
    description: "view all directory listings",
  },
  {
    command: "pwd",
    description: "view all directory listings",
  },
  {
    command: "clear",
    description: "view all directory listings",
  },
];
