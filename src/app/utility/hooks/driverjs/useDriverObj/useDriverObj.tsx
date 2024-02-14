import  {useEffect,useContext} from 'react'
import { MyContext } from '../../../GlobalContext/MyContext';
import { driver } from 'driver.js';
import stepsHome from './steps/stepsHome';
import { usePathname } from 'next/navigation';
import { TypeValue } from '@/app/@types/MyContext';

function useDriverObj(
    setInput: React.Dispatch<React.SetStateAction<string | number | undefined>>,
    contextCommand?: TypeValue,
    driverActive?: boolean
) {
    const pathname = usePathname()
    const { nextStep, visit, clear, setClear, setTotalCommand } = useContext(MyContext);

    const driverObj = driver({
        animate: true,
        showProgress: true,
        showButtons: ['next', 'close'],
        doneBtnText: 'Finish',
        steps: stepsHome(
            setInput,
            contextCommand,
        )
    });

    // First Show Driverjs
    useEffect(() => {
        if (visit >= 2) setTimeout(() => driverObj.destroy(), 1000)
        else {
            if (driverActive && pathname === '/') driverObj.drive(nextStep)
        }
    }, [nextStep, visit])

    // Clear 
    useEffect(() => {
        if (clear) {
            setInput('')
            setTotalCommand?.(['default'])
        }
        return () => setClear?.(false)
    }, [clear])

    return {driverObj}

}

export default useDriverObj
