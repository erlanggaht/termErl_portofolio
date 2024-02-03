import { MyContext } from '@/app/utility/GlobalContext/MyContext';
import React, { useContext } from 'react'

function KbdShortcut({value
} : {
    value?: string
}) {
    const { setTotalCommand } = useContext(MyContext)

    const ClickTextGUI = (text: string) => {
        setTotalCommand?.(prev => {
            return [...prev, text]
        })
    }

    return (
        <span className="px-2 py-1.5 text-xs font-semibold text-gray-300 bg-body border border-darkness-100 rounded-lg shadow-sm cursor-pointer" onClick={() => ClickTextGUI('ls')}>{value}</span>
    )
}

export default KbdShortcut;
