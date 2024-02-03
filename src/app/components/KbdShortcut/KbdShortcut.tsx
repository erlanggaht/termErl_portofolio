import { MyContext } from '@/app/utility/GlobalContext/MyContext';
import React, { useContext } from 'react'

function KbdShortcut({
    value,
    runValue = ''
} : {
    value?: string,
    runValue: string
}) {
    const { setTotalCommand,setClear } = useContext(MyContext)

    const ClickTextGUI = (text: string) => {
        if(text === 'clear') setClear?.(true)
        setTotalCommand?.(prev => {
            return [...prev, text]
        })
    }

    return (
        <span className="px-2 py-1.5 text-xs font-semibold text-gray-300 bg-body border border-darkness-100 rounded-lg shadow-sm cursor-pointer" onClick={() => ClickTextGUI(runValue)}>{value}</span>
    )
}

export default KbdShortcut;
