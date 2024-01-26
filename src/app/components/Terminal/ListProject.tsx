'use client'
import { MyContext } from '@/app/utility/GlobalContext/MyContext'
import React, { useContext } from 'react'

type TypeProjectsMe = {
    name: string,
    link: string,
    type: "web" | "mobile",
    year: number,
}

const projectsMe: TypeProjectsMe[]  = [
{
    name: "BrainMe",
    link: "https://erlanggahidayatullah.vercel.app",
    type: 'web',
    year: 2021
},
{
    name: "Erlanggaht",
    link: "https://erlanggaht93.vercel.app",
    type: 'web',
    year: 2021
}
]

export default function ListProject() {
    const {setRunProject,historyInput} = useContext(MyContext)
    console.log(historyInput)
    const FnrunProject = (link:string) => {
        setRunProject?.({
            active: true,
            link: link
          })
    }

    if(historyInput?.split(' ')[0] === 'run') {
        const getYearInput = historyInput?.split(' ')[1]?.split('_')[1]?.split('.')[0]
        const filterYear = projectsMe.filter(projectYear => projectYear.year === parseInt(getYearInput))
        if(filterYear.length > 0) return projectsMe.map((m,i) => {
          return <li className="font-normal text-md cursor-pointer pt-1 px-2 hover:bg-white hover:text-link" onClick={() => FnrunProject(m.link)}>./{m.name}.{m.type}</li>
        })

    }
    

  
}
