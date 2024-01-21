import React, { ReactElement } from "react"
import { htmlAbout, htmlLearn_App_Route,htmlLearn_App_CatFile,htmlLearn_App_Other } from "./htmlText"

type TypeTeks = {
    about?: ReactElement,
    learn_app?:{
        htmlLearn_App_Route?: React.ReactNode[],
        htmlLearn_App_CatFile?: React.ReactNode[]
        htmlLearn_App_Other?: React.ReactNode[]
    } 
        
}

function Teks(): TypeTeks  {
    return {
        about: htmlAbout,
        learn_app: {
            htmlLearn_App_Route,
            htmlLearn_App_CatFile,
            htmlLearn_App_Other
        },
    }
            
}

export default Teks
