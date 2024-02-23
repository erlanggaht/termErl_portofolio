import Link from "next/link"
import { RoleCatFile, RoleOther, RoleRoute } from "../../roleCommand/roleCommands"


// result cat
const htmlAbout = <div>
    <p>Hello, my name is <Link href={'/'}><span className="text-secondary">Erlangga Hidayatullah</span></Link>, a software developer with a primary focus on web development.  I have committed to creating engaging and responsive online experiences.</p>
    <p>To see my project, go to the project directory
        <Link href={'/projects'}>
            <span className="text-secondary"> 'cd projects' </span>
        </Link>
    </p>

    <h3 className="mt-2">Tech Stack:</h3>
    <div className="flex flex-wrap gap-2" id="programming_language">
        <p role="folderRouteGUI">Javascript</p>
        <p role="folderRouteGUI">PHP</p>
        <p role="folderRouteGUI">Python</p>
        <p role="folderRouteGUI">Typescript</p>
        <p role="folderRouteGUI">NodeJs</p>

        <p role="folderRouteGUI">Vite</p>
        <p role="folderRouteGUI">React</p>
        <p role="folderRouteGUI">React Native</p>
        <p role="folderRouteGUI">Next</p>
        <p role="folderRouteGUI">Express</p>
        <p role="folderRouteGUI">Vue</p>
        <p role="folderRouteGUI">Jquery</p>
        <p role="folderRouteGUI">Redux</p>
        <p role="folderRouteGUI">Tanstack Query</p>
        <p role="folderRouteGUI">Bootstrap</p>
        <p role="folderRouteGUI">Tailwind</p>
        <p role="folderRouteGUI">Firebase</p>
        <p role="folderRouteGUI">Backpack Laravel</p>

        <p role="folderRouteGUI">SQL</p>
        <p role="folderRouteGUI">MongoDB</p>
        <p role="folderRouteGUI">Firestore</p>

        <p role="folderRouteGUI">Docker</p>
        <p role="folderRouteGUI">CI/CD</p>
        <p role="folderRouteGUI">Figma</p>
        <p role="folderRouteGUI">GIT</p>

        <p role="folderRouteGUI">Websocket</p>
        <p role="folderRouteGUI">GraphQL</p>
        <p role="folderRouteGUI">gRPC</p>
        <p role="folderRouteGUI">JEST</p>
        <p role="folderRouteGUI">Linux</p>
        <p role="folderRouteGUI">WebRTC</p>
    </div>


</div >

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