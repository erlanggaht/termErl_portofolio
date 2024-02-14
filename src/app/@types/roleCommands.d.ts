type TypeRoleCommands = {
    command?: string;
    link?: string;
    description?: string;
    type?: string;
};

interface InterfaceRoleRoute extends TypeRoleCommands { }
interface InterfaceRoleCatFile extends TypeRoleCommands { }
interface InterfaceRoleRunFile extends TypeRoleCommands {
    type: "projects";
}
interface InterfaceRoleOther extends TypeRoleCommands { }

export {
    TypeRoleCommands,
    InterfaceRoleRoute,
    InterfaceRoleCatFile,
    InterfaceRoleRunFile,
    InterfaceRoleOther
}
