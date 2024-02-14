type TypeSetRunProject = {
    active: boolean,
    link: string
  }
  
 type TypeValue = {
    totalCommand?: string[],
    setTotalCommand?: Dispatch<SetStateAction<string[]>>,
    nextStep?: number,
    setNextStep?: Dispatch<SetStateAction<number>>,
    visit?: any,
    historyInput?: string,
    setHistoryInput?:  Dispatch<SetStateAction<string>>,
    clear?: boolean,
    setClear?: Dispatch<SetStateAction<boolean>>,
    runProject?: TypeSetRunProject,
    setRunProject?: Dispatch<SetStateAction<TypeSetRunProject>>,
    openProject?: boolean,
    setOpenProject?: Dispatch<SetStateAction<boolean>>,
    modeGUI?: boolean,
    setModeGUI?: Dispatch<SetStateAction<boolean>>,
    selectMode?: boolean
    setSelectMode?: Dispatch<SetStateAction<boolean>>,
};

export {TypeSetRunProject,TypeValue}