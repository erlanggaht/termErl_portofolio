import { ReactElement } from "react"
type TypeTeks = {
    about?: ReactElement,
    list_command?:{
        htmllist_command_Route?: React.ReactNode[],
        htmllist_command_CatFile?: React.ReactNode[],
        htmllist_command_RunFile?: React.ReactNode,
        htmllist_command_Other?: React.ReactNode[]
    },  
    list_directory:  React.ReactNode
}
export default TypeTeks
