import { RoleRouteRoot } from "../roleCommand/roleCommands"

const htmlAbout = <p>Hello, my name is <span className="text-secondary">Erlangga Hidayatullah</span>, a software developer with a primary focus on web development.  I have committed to creating engaging and responsive online experiences</p>

const htmlLearn_App = RoleRouteRoot.map((m,i) =>{
<p className="font-thin text-secondary">'{m.command}'</p>
}
)


export {
    htmlAbout,
    htmlLearn_App
}