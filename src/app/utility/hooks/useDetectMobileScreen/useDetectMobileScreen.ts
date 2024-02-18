import { useEffect, useState } from "react";

function useDetectMobileScreen() {
  const [detectScreenMobileJs, setDetectScreenMobileJs] = useState<boolean>(false);

  useEffect(() => {
    let isMobile = window.matchMedia(
      "only screen and (max-width: 768px)",
    ).matches;
    if (isMobile) setDetectScreenMobileJs(true);
    else setDetectScreenMobileJs(false);
  }, []);


  return {detectScreenMobileJs}
}

export default useDetectMobileScreen;
