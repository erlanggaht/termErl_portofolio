import React, { ReactElement } from "react"
import { htmlAbout, htmlLearn_App } from "./htmlText"

type TypeTeks = {
    about?: ReactElement,
    learn_app?: React.ReactNode[]
}

function Teks(): TypeTeks  {
    return {
        about: htmlAbout,
        learn_app: htmlLearn_App,
    }
            
}

export default Teks
