import { mountReact } from "./script-react";

chrome.runtime.onMessage.addListener(() => {
   const body = document.querySelector("body")
   if (body == undefined){
      // Mensaje al serviceWorker --> openInNewTab
      return;
   }
   if (existExtensionShadow()){
      // Mensaje al serviceWorker --> openInNewTab
      return;
   }
   
   const shadowHost = generateHost(body)
   const shadowRoot = generateRoot(shadowHost)
   const restore = () => { shadowHost.remove() }
   mountReact(shadowRoot,restore)
})

export const hostId = "__[^-^]-directly-web-extension__"

export function existExtensionShadow(){
   return !!document.getElementById(hostId)
}
export function generateHost(body: HTMLBodyElement){
   const shadowHost = document.createElement("div")

   shadowHost.setAttribute("id", hostId)
   shadowHost.attachShadow({mode:"open"})

   
   body.appendChild(shadowHost)

   return shadowHost;
}
export function generateRoot(host: HTMLDivElement){
   const shadowRoot = document.createElement("div")
   host.appendChild(shadowRoot)

   return shadowRoot;
}

