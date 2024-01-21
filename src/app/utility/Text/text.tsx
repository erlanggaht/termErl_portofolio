import React, { ReactElement } from "react"
import { htmlAbout, htmllist_command_Route,htmllist_command_CatFile,htmllist_command_Other,html_ls_pwd } from "./htmlText"

type TypeTeks = {
    about?: ReactElement,
    list_command?:{
        htmllist_command_Route?: React.ReactNode[],
        htmllist_command_CatFile?: React.ReactNode[]
        htmllist_command_Other?: React.ReactNode[]
    },  
    list_directory:  React.ReactNode
    
}

function Teks(): TypeTeks  {
    return {
        about: htmlAbout,
        list_command: {
            htmllist_command_Route,
            htmllist_command_CatFile,
            htmllist_command_Other
        },
        list_directory: html_ls_pwd
        
    }
            
}

export default Teks
