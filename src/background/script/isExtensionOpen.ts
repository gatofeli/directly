import { hostId } from "@utils/constants/default"

export function isExtensionOpen(){
   return !!document.getElementById(hostId)
}
