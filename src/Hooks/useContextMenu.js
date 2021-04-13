import { useState } from "react";

function useContextMenu(elm) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({
    x: null,
    y: null,
  });

  function close() {
    setIsOpen(false);
  }

  function open(e) {
    if (e.target.getAttribute("name") === elm) {
      setIsOpen(true);
      setPosition({ x: e.pageX, y: e.pageY });
    }
  }

  return { isOpen, position, close, open };
}

export default useContextMenu;
