import TypeTeks from "@/app/@types/text"
import {htmllist_command_CatFile,htmllist_command_RunFile,htmllist_command_Other,html_ls_pwd } from "./htmlText"

function Teks(): TypeTeks  {
    return {
        list_command: {
            htmllist_command_CatFile,
            htmllist_command_RunFile,
            htmllist_command_Other
        },
        list_directory: html_ls_pwd
        
    }
            
}

export default Teks
