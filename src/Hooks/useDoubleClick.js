import { useState } from "react";

function useDoubleClick(delay = 300) {
  const [lastClick, setLastClick] = useState(null);

  function registerClick() {
    setLastClick(new Date().getTime());
  }

  function isDoubleClick() {
    if (lastClick) {
      const timePassed = new Date().getTime() - lastClick;
      return timePassed < delay;
    }
    return false;
  }

  return [isDoubleClick, registerClick];
}

export default useDoubleClick;
