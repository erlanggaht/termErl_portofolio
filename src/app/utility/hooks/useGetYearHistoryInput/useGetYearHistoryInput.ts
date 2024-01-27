import { MyContext } from "../../GlobalContext/MyContext"
import {useContext} from 'react'
function useGetYearHistoryInputRun() {
    const {historyInput} = useContext(MyContext)
    if (historyInput?.split(' ')[0] === 'run') {
        const getYearInput = historyInput?.split(' ')[1]?.split('_')[1]?.split('.')[0]
        return parseInt(getYearInput)
    }
}

export default useGetYearHistoryInputRun;
