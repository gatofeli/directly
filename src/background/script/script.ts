import { hostId } from "@utils/constants/default";
import { mountReact } from "./script-react";
import { isExtensionOpen } from "./isExtensionOpen";

(()=>{
const body = document.querySelector("body")
   if (body == undefined){
      // Mensaje al serviceWorker --> openInNewTab
      return;
   }
   if (isExtensionOpen()){
      // Mensaje al serviceWorker --> openInNewTab
      return;
   }
   
   const host = document.createElement("div")
   host.setAttribute("id", hostId)

   const shadowHost = host.attachShadow({mode:"open"})   
   body.appendChild(host)
   
   const root = document.createElement("div")
   shadowHost.appendChild(root)
   
   const restore = () => { host.remove() }

   mountReact(root,restore)
})()