import { RoleCatFile, RoleOther, RoleRoute } from "../roleCommand/roleCommands"


// result cat
const htmlAbout = <p>Hello, my name is <span className="text-secondary">Erlangga Hidayatullah</span>, a software developer with a primary focus on web development.  I have committed to creating engaging and responsive online experiences</p>

const htmlLearn_App_Route = RoleRoute.map((m,i) =>{
    return <p key={i} className="font-thin text-secondary">'{m.command}'</p>
})

const htmlLearn_App_CatFile = RoleCatFile.map((m,i) =>{
    return <p  key={i} className="font-thin text-secondary">'{m.command}'</p>
})

const htmlLearn_App_Other = RoleOther.map((m,i) =>{
    return <p  key={i} className="font-thin text-secondary">'{m.command}'</p>
})


export {
    htmlAbout,
    htmlLearn_App_Route,
    htmlLearn_App_CatFile,
    htmlLearn_App_Other
}