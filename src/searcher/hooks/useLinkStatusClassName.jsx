import { useState } from "react"

export function useLinkStatusClassName() {
  const [statusLink, setStatusLink] = useState('');
  const ENTER_KEY = "Enter";
  const META_KEY = "Meta";

  const styleActive = () => {
    setStatusLink('active-key')
  }
  const styleVisited = (mouseClick = false) => {
    if (!statusLink && !mouseClick) return;
    setStatusLink('visited')
  }

  return { statusLink, styleActive, styleVisited, ENTER_KEY, META_KEY }
}