import TypeTeks from "@/app/@types/text"
import { htmlAbout, htmllist_command_Route,htmllist_command_CatFile,htmllist_command_Other,html_ls_pwd } from "./htmlText"

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
