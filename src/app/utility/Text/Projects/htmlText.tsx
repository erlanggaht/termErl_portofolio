import { RoleCatFile, RoleOther, projectsFile } from "../../roleCommand/roleCommands"


// result cat
const htmllist_command_CatFile = RoleCatFile
.filter((m,i) => m.type === "all" || m.type === "projects")
.map((m, i) => {
    return <p key={i} className="font-thin text-secondary">'{m.command}'</p>
})

const htmllist_command_Other = RoleOther.map((m, i) => {
    return <p key={i} className="font-thin text-secondary">'{m.command}'</p>
})

// result run
const htmllist_command_RunFile =  <p  className="font-thin text-secondary">'run project_<span className="text-link">year</span>.erl'</p>



// result ls/pwd ( projects ) 
const html_ls_pwd = <>
<p role="fileRoute">list command</p>
{projectsFile.map((m,i) => {
    return <p key={i} role="fileRun">{m}</p>
})}
</>



export {
    htmllist_command_CatFile,
    htmllist_command_RunFile,
    htmllist_command_Other,
    html_ls_pwd
}