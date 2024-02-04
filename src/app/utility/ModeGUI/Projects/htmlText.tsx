'use client'
import React, { useContext } from 'react'
import { MyContext } from '../../GlobalContext/MyContext'
import { projectsFile } from '../../roleCommand/roleCommands'

function HtmlTextProjectsGUI() {

    const { setTotalCommand,setOpenProject,setHistoryInput } = useContext(MyContext)
    const ClickTextGUI = (text: string) => {
        if(text === 'cat list command') setOpenProject?.(false)
        else setOpenProject?.(true)
        setHistoryInput?.(text)
        setTotalCommand?.(prev => {
            return [...prev, text]
        })
    }
    return <div className='flex flex-wrap gap-2 '>
        <p role="fileRouteGUI" onClick={() => ClickTextGUI('cat list command')}>list command</p>
        {projectsFile.map((m, i) => {
            return <p key={i} role="fileRunGUI" onClick={() => ClickTextGUI('run ' + m)}>{m}</p>
        })}
    </div>
}

export default HtmlTextProjectsGUI;
