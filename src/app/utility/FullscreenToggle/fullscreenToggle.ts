

function toggleFullScreen(element:string) {
        if (!document.fullscreenElement) {
          document.querySelector(element)?.requestFullscreen();
        } else if (document.exitFullscreen) {
          document.exitFullscreen();
        }
    }
      

export default toggleFullScreen
