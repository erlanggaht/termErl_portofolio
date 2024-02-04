'use client'
import { MyContext } from '@/app/utility/GlobalContext/MyContext'
import React, { useContext } from 'react'
import projectsMe from './ProjectMe'
import toggleFullScreen from '@/app/utility/FullscreenToggle/fullscreenToggle'
import useGetYearHistoryInputRun from '@/app/utility/hooks/useGetYearHistoryInput/useGetYearHistoryInput'

export default function ListProject() {
    const { setRunProject, historyInput, runProject } = useContext(MyContext)
    const getYearInput = useGetYearHistoryInputRun()
    // Run
    const FnrunProject = (link: string) => {
        setRunProject?.({
            active: true,
            link: link
        })
    }

    // Visit
    const FnVisit = (link: string) => {
        window.open(link)
    }

    // FullScreen
    const FnFullScreen = (element: string) => {
        toggleFullScreen(element)
    }


    if (historyInput?.split(' ')[0] === 'run') {
        const filterYear = projectsMe.filter(projectYear => projectYear.year === getYearInput)
        if (filterYear.length > 0) return filterYear.map((m, i) => {
            return <details className="mb-2" key={i}>
                <summary className="p-1 px-4 rounded-lg cursor-pointer mb-1 hover:opacity-80">
                    <span className="font-bold">{m.name}</span>
                </summary>
                <ul className="ml-10 space-y-4">
                    <li className='p-1  hover:bg-white transition-all hover:text-link cursor-pointer font-normal' onClick={() => FnrunProject(m.link)}>
                        Preview
                    </li>
                    <li className='p-1  hover:bg-white transition-all hover:text-link cursor-pointer  font-normal' onClick={() => FnVisit(m.link)}>
                        Visit
                    </li>
                    {runProject?.active && <li className='p-1  hover:bg-white transition-all hover:text-link cursor-pointer  font-normal' onClick={() => FnFullScreen('iframe')}>
                        Fullscreen
                    </li>}

                </ul>
            </details>

        })
    }

}
