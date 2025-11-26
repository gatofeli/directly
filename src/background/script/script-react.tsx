import { App } from "@searcher/App";
import { createRoot} from "react-dom/client";

export function mountReact (shadowRoot: HTMLDivElement, restore: ()=>void){
    const root = createRoot(shadowRoot);
    const exit = () => {
        root.unmount();
        restore();
    }

    root.render(
        <App exit={exit}/>
    );
}
