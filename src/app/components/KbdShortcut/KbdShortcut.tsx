import { MyContext } from '@/app/utility/GlobalContext/MyContext';
import React, { useContext } from 'react'

function KbdShortcut({
    value,
    runValue = '',
    disabled = false
} : {
    value?: string,
    runValue: string,
    disabled?: boolean
}) {
    const { setTotalCommand,setClear } = useContext(MyContext)

    const ClickTextGUI = (text: string) => {
        if(text === 'clear') setClear?.(true)
        setTotalCommand?.((prev:string) => {
            return [...prev, text]
        })
    }

    return (
        <button disabled={disabled} className="px-2 py-1.5 text-xs font-semibold text-gray-300 bg-body border border-darkness-100 rounded-lg shadow-sm cursor-pointer disabled:cursor-not-allowed" onClick={() => ClickTextGUI(runValue)}>{value}</button>
    )
}

export default KbdShortcut;
