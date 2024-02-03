'use client'
import React, { useContext } from 'react'
import { MyContext } from '../../GlobalContext/MyContext'

function HtmlTextHomeGUI() {
    
    const {setTotalCommand} = useContext(MyContext)
    const ClickTextGUI = (text:string) => {
    setTotalCommand?.(prev => {
        return [...prev, text]
    })        
    }

    return (
        <>
            <span role="fileRouteGUI" onClick={() => ClickTextGUI('cat list command')}>list command</span><br />
            <span role="fileRouteGUI" onClick={() => ClickTextGUI('cat about me')}>about me</span><br />
            <span role="folderRouteGUI" onClick={() => ClickTextGUI('cd document')}>document</span><br />
            <span role="folderRouteGUI" onClick={() => ClickTextGUI('cd projects')}>projects</span><br />
        </>

    )
}

export default HtmlTextHomeGUI;
