import React from 'react'
import { MyContext } from '../GlobalContext/MyContext'

function OpacityFadeEffect() {
    const { openProject, runProject } = React.useContext(MyContext)

  // Fade
  React.useEffect(() => {
    document.body.classList.add('fade');
    setTimeout(() => {
      document.body.className = '';
    }, 1201);
  }, [])

  React.useEffect(() => {
   
    if (openProject) {
      document.querySelector("#TerminalRunProject")?.classList.add('fade')
      setTimeout(() => {
        document.querySelector("#TerminalRunProject")?.classList.remove('fade')
      }, 100);
    }

    if (runProject) {
      document.querySelector("iframe")?.classList.add('fade')
      setTimeout(() => {
        document.querySelector("iframe")?.classList.remove('fade')
      }, 900);
    }

 
  }, [openProject, runProject])

}

export default OpacityFadeEffect
