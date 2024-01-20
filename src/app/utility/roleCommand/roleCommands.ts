export type TypeRoleCommands = {
  command?: string;
};

export interface InterfaceRoleRouteRoot extends TypeRoleCommands {
  link?: string;
}
export interface InterfaceRoleCatFile extends TypeRoleCommands {}

// Role Command
export const RoleCommand: TypeRoleCommands[] = [
  {
    command: "ls",
  },
  {
    command: "cd",
  },
  {
    command: "cat"
  }
];

// Role cd Route
export const RoleRouteRoot: InterfaceRoleRouteRoot[] = [
  {
    command: 'cd ..',
    link: ""
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
    command: "cat about",
  },
  {
    command: "cat learn_app",
  },
];
