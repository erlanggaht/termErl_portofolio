import { RoleCatFile, RoleOther, RoleRoute } from "../../roleCommand/roleCommands"


// result cat
const htmlAbout = <div>
<p>Hello, my name is <span className="text-secondary">Erlangga Hidayatullah</span>, a software developer with a primary focus on web development.  I have committed to creating engaging and responsive online experiences.</p>
<p>To see my project, go to the project directory
<span className="text-secondary"> 'cd projects' </span></p>
</div>

const htmllist_command_Route = RoleRoute.map((m, i) => {
    return <p key={i} className="font-thin text-secondary">'{m.command}'</p>
})

const htmllist_command_CatFile = RoleCatFile.map((m, i) => {
    return <p key={i} className="font-thin text-secondary">'{m.command}'</p>
})

const htmllist_command_Other = RoleOther.map((m, i) => {
    return <p key={i} className="font-thin text-secondary">'{m.command}'</p>
})

// result ls/pwd ( Home ) 
const html_ls_pwd = <>
<p role="fileRoute">list command</p>
<p role="fileRoute">about me</p>
<p role="folderRoute">projects</p>
</>



export {
    htmlAbout,
    htmllist_command_Route,
    htmllist_command_CatFile,
    htmllist_command_Other,
    html_ls_pwd
}