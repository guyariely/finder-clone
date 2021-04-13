import { useState, useEffect } from "react";
import { root as defaultRoot } from "../root";

function useHistoryStack() {
  const [backwardHistory, setBackwardHistory] = useState([]);
  const [forwardHistory, setForwardHistory] = useState([]);

  useEffect(() => {
    const files = JSON.parse(localStorage.getItem("files"));
    setBackwardHistory([files || defaultRoot]);
  }, []);

  function navigateBackward() {
    setForwardHistory(forwardHistory => [...forwardHistory, currentFolder()]);
    setBackwardHistory(backwardHistory =>
      backwardHistory.slice(0, backwardHistory.length - 1)
    );
  }

  function navigateForward() {
    setBackwardHistory(backwardHistory => [
      ...backwardHistory,
      forwardHistory[forwardHistory.length - 1],
    ]);
    setForwardHistory(forwardHistory =>
      forwardHistory.slice(0, forwardHistory.length - 1)
    );
  }

  function navigateToFolder(name) {
    setBackwardHistory(backwardHistory => {
      return [...backwardHistory, currentFolder()[name].files];
    });
    setForwardHistory([]);
  }

  function navigateToFavorite(folderName) {
    const root = backwardHistory[0];
    const homeDirectory = root["Home"];
    const folder =
      folderName === "Home" ? homeDirectory : homeDirectory.files[folderName];

    setBackwardHistory(backwardHistory => [...backwardHistory, folder.files]);
    setForwardHistory([]);
  }

  function updateCurrentFolder(updatedFolder) {
    setBackwardHistory(backwardHistory => [
      ...backwardHistory.slice(0, backwardHistory.length - 1),
      updatedFolder,
    ]);
  }

  function currentFolder() {
    return backwardHistory[backwardHistory.length - 1];
  }

  function root() {
    return backwardHistory[0];
  }

  return {
    backwardHistory,
    forwardHistory,
    currentFolder,
    root,
    navigateBackward,
    navigateForward,
    navigateToFolder,
    navigateToFavorite,
    updateCurrentFolder,
  };
}

export default useHistoryStack;
