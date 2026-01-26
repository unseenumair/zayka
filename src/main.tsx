import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initClientEffects } from "./core/clientEffects.ts";

createRoot(document.getElementById("root")!).render(<App />);
initClientEffects();
