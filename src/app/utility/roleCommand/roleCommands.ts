export type TypeRoleCommands = {
  id: number;
  command?: string;
};

export interface InterfaceRoleRouteRoot extends TypeRoleCommands {
  link?: string;
}
export interface InterfaceRoleCatFile extends TypeRoleCommands {}

// Role Command
export const RoleCommand: TypeRoleCommands[] = [
  {
    id: 1,
    command: "ls",
  },
  {
    id: 2,
    command: "cd",
  },
];

// Role cd Route
export const RoleRouteRoot: InterfaceRoleRouteRoot[] = [
  {
    id: 1,
    command: "cd home",
    link: "/home",
  },
  {
    id: 2,
    command: "cd /",
    link: "/home",
  },
  {
    id: 3,
    command: "cd ~",
    link: "/home",
  },
];

// Role cat file

export const RoleCatFile: InterfaceRoleCatFile[] = [
  {
    id: 1,
    command: "cat about",
  },
  {
    id: 2,
    command: "cat learn_app",
  },
];
