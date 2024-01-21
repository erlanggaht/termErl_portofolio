export type TypeRoleCommands = {
  command?: string;
  link?: string;
  description?:string
};

export interface InterfaceRoleRoute extends TypeRoleCommands {}
export interface InterfaceRoleCatFile extends TypeRoleCommands {}
export interface InterfaceRoleOther extends TypeRoleCommands{}

// Role Command
export const RoleCommand: TypeRoleCommands[] = [
  {
    command: "ls",
  },
  {
    command: "pwd"
  },
  {
    command: "cd",
  },
  {
    command: "cat",
  },
];

// Role cd Route
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
];

// Role cat file

export const RoleCatFile: InterfaceRoleCatFile[] = [
  {
    command: "cat about me",
  },
  {
    command: "cat list command",
  },
];

// Role Other

export const RoleOther: InterfaceRoleOther[]  = [
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
